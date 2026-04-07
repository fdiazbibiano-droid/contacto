<template>
    <div class="section-editor">
        <div v-if="loading" class="state-loading"><div class="spinner-lg" /><p>Loading…</p></div>
        <div v-else-if="loadError" class="state-error">
            <p>⚠ Could not connect to Strapi.</p>
            <button @click="load" class="btn-retry">Retry</button>
        </div>

        <form v-else @submit.prevent="save" class="editor-form">
            <div class="lang-tabs">
                <button type="button" :class="{ active: lang === 'en' }" @click="lang = 'en'">🇺🇸 English</button>
                <button type="button" :class="{ active: lang === 'es' }" @click="lang = 'es'">🇲🇽 Español</button>
            </div>

            <template v-if="lang === 'en'">
                <CmsField label="Title"   v-model="form.title" required />
                <CmsField label="Content" v-model="form.text"  type="textarea" required />
            </template>
            <template v-else>
                <CmsField label="Título"    v-model="form.title_es" />
                <CmsField label="Contenido" v-model="form.text_es"  type="textarea" />
            </template>

            <div class="form-actions">
                <SaveStatus :status="saveStatus" />
                <button type="submit" class="btn-save" :disabled="saving">{{ saving ? 'Saving…' : 'Save Changes' }}</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useStrapi } from '@/composables/useStrapi';
import CmsField   from '../components/CmsField.vue';
import SaveStatus from '../components/SaveStatus.vue';

const { getAbout, updateAbout } = useStrapi();

const loading    = ref(true);
const loadError  = ref(false);
const saving     = ref(false);
const saveStatus = ref<'idle'|'success'|'error'>('idle');
const lang       = ref<'en'|'es'>('en');

const form = reactive({ title: '', text: '', title_es: '', text_es: '' });

const load = async () => {
    loading.value = true; loadError.value = false;
    try {
        const res = await getAbout();
        const d   = res?.data?.attributes ?? {};
        Object.assign(form, { title: d.title ?? '', text: d.text ?? '', title_es: d.title_es ?? '', text_es: d.text_es ?? '' });
    } catch { loadError.value = true; }
    finally  { loading.value = false; }
};

const save = async () => {
    saving.value = true; saveStatus.value = 'idle';
    try { await updateAbout({ ...form }); saveStatus.value = 'success'; }
    catch { saveStatus.value = 'error'; }
    finally { saving.value = false; }
};

onMounted(load);
</script>

<style scoped>
.section-editor { max-width: 760px; }
.lang-tabs { display: flex; gap: 0.5rem; margin-bottom: 2rem; }
.lang-tabs button { background: #1a1d27; border: 1px solid #2a2d3a; color: #888; padding: 8px 20px; border-radius: 6px; cursor: pointer; font-size: 0.88rem; font-weight: 600; transition: all 0.2s; }
.lang-tabs button.active { background: rgba(192,57,43,0.2); border-color: #c0392b; color: #e74c3c; }
.editor-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-actions { display: flex; align-items: center; justify-content: flex-end; gap: 1rem; padding-top: 1rem; border-top: 1px solid #1e2130; }
.btn-save { background: #c0392b; color: #fff; border: none; padding: 10px 28px; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: background 0.2s; }
.btn-save:hover:not(:disabled) { background: #a93226; }
.btn-save:disabled { opacity: 0.55; cursor: not-allowed; }
.btn-retry { margin-top: 1rem; background: #c0392b; color: #fff; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; }
.state-loading { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 4rem; color: #555; }
.state-error   { background: rgba(192,57,43,0.1); border: 1px solid rgba(192,57,43,0.3); border-radius: 8px; padding: 2rem; text-align: center; color: #e74c3c; }
.spinner-lg { width: 40px; height: 40px; border: 3px solid #2a2d3a; border-top-color: #c0392b; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
