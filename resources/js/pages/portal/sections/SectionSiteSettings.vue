<template>
    <div class="section-editor">
        <div v-if="loading" class="state-loading"><div class="spinner-lg" /><p>Loading settings…</p></div>
        <div v-else-if="loadError" class="state-error">
            <p>⚠ Could not connect to Strapi.</p>
            <button @click="load" class="btn-retry">Retry</button>
        </div>

        <form v-else @submit.prevent="save" class="editor-form">
            <div class="fields-group">
                <h4>General</h4>
                <CmsField label="Company Name" v-model="form.company_name" required />
                <CmsField label="Phone"        v-model="form.phone"        required />
                <CmsField label="Email"        v-model="form.email"        type="email" required />
                <CmsField label="Address"      v-model="form.address" />
            </div>

            <div class="fields-group">
                <h4>Social &amp; Contact Links</h4>
                <CmsField label="Facebook URL" v-model="form.facebook_url" />
                <CmsField label="WhatsApp (number only, e.g. 15642098251)" v-model="form.whatsapp" />
            </div>

            <div class="fields-group">
                <h4>Service Area</h4>
                <CmsField label="Service Area (English)" v-model="form.service_area_en" />
                <CmsField label="Service Area (Spanish)" v-model="form.service_area_es" />
            </div>

            <div class="form-actions">
                <SaveStatus :status="saveStatus" />
                <button type="submit" class="btn-save" :disabled="saving">{{ saving ? 'Saving…' : 'Save Settings' }}</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useStrapi } from '@/composables/useStrapi';
import CmsField   from '../components/CmsField.vue';
import SaveStatus from '../components/SaveStatus.vue';

const { getSiteSettings, updateSiteSettings } = useStrapi();

const loading    = ref(true);
const loadError  = ref(false);
const saving     = ref(false);
const saveStatus = ref<'idle'|'success'|'error'>('idle');

const form = reactive({
    company_name: '', phone: '', email: '', address: '',
    facebook_url: '', whatsapp: '',
    service_area_en: '', service_area_es: '',
});

const load = async () => {
    loading.value = true; loadError.value = false;
    try {
        const res = await getSiteSettings();
        const d   = res?.data?.attributes ?? {};
        Object.assign(form, {
            company_name:    d.company_name    ?? '',
            phone:           d.phone           ?? '',
            email:           d.email           ?? '',
            address:         d.address         ?? '',
            facebook_url:    d.facebook_url    ?? '',
            whatsapp:        d.whatsapp        ?? '',
            service_area_en: d.service_area_en ?? '',
            service_area_es: d.service_area_es ?? '',
        });
    } catch { loadError.value = true; }
    finally  { loading.value = false; }
};

const save = async () => {
    saving.value = true; saveStatus.value = 'idle';
    try { await updateSiteSettings({ ...form }); saveStatus.value = 'success'; }
    catch { saveStatus.value = 'error'; }
    finally { saving.value = false; }
};

onMounted(load);
</script>

<style scoped>
.section-editor { max-width: 760px; }
.editor-form { display: flex; flex-direction: column; gap: 2rem; }
.fields-group { display: flex; flex-direction: column; gap: 1.25rem; padding: 1.75rem; background: #1a1d27; border: 1px solid #2a2d3a; border-radius: 10px; }
.fields-group h4 { color: #e74c3c; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.25rem; }
.form-actions { display: flex; align-items: center; justify-content: flex-end; gap: 1rem; padding-top: 0.5rem; }
.btn-save { background: #c0392b; color: #fff; border: none; padding: 10px 28px; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: background 0.2s; }
.btn-save:hover:not(:disabled) { background: #a93226; }
.btn-save:disabled { opacity: 0.55; cursor: not-allowed; }
.btn-retry { margin-top: 1rem; background: #c0392b; color: #fff; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; }
.state-loading { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 4rem; color: #555; }
.state-error   { background: rgba(192,57,43,0.1); border: 1px solid rgba(192,57,43,0.3); border-radius: 8px; padding: 2rem; text-align: center; color: #e74c3c; }
.spinner-lg { width: 40px; height: 40px; border: 3px solid #2a2d3a; border-top-color: #c0392b; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
