<template>
    <div class="section-editor">
        <div v-if="loading" class="state-loading"><div class="spinner-lg" /><p>Loading services…</p></div>
        <div v-else-if="loadError" class="state-error">
            <p>⚠ Could not connect to Strapi.</p>
            <button @click="load" class="btn-retry">Retry</button>
        </div>

        <div v-else>
            <!-- Add new -->
            <div class="add-bar">
                <h3>{{ services.length }} service{{ services.length !== 1 ? 's' : '' }}</h3>
                <button class="btn-add" @click="openNew">+ Add Service</button>
            </div>

            <!-- List -->
            <div class="services-list">
                <div v-for="svc in services" :key="svc.id" class="svc-row">
                    <div class="svc-info">
                        <span class="svc-name">{{ svc.attributes.name }}</span>
                        <span class="svc-name-es">{{ svc.attributes.name_es }}</span>
                    </div>
                    <div class="svc-actions">
                        <button class="btn-icon edit" @click="openEdit(svc)" title="Edit">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
                        </button>
                        <button class="btn-icon delete" @click="remove(svc.id)" title="Delete">
                            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <Transition name="modal">
                <div v-if="modal" class="modal-backdrop" @click.self="modal = false">
                    <div class="modal-box">
                        <h3>{{ editing ? 'Edit Service' : 'New Service' }}</h3>
                        <form @submit.prevent="saveService" class="modal-form">
                            <div class="lang-tabs">
                                <button type="button" :class="{ active: lang === 'en' }" @click="lang = 'en'">🇺🇸 English</button>
                                <button type="button" :class="{ active: lang === 'es' }" @click="lang = 'es'">🇲🇽 Español</button>
                            </div>
                            <template v-if="lang === 'en'">
                                <CmsField label="Name"        v-model="svcForm.name"        required />
                                <CmsField label="Description" v-model="svcForm.description" type="textarea" required />
                            </template>
                            <template v-else>
                                <CmsField label="Nombre"      v-model="svcForm.name_es" />
                                <CmsField label="Descripción" v-model="svcForm.description_es" type="textarea" />
                            </template>
                            <CmsField label="Order (number)" v-model.number="svcForm.order" type="number" />

                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" @click="modal = false">Cancel</button>
                                <SaveStatus :status="saveStatus" />
                                <button type="submit" class="btn-save" :disabled="saving">{{ saving ? 'Saving…' : 'Save' }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useStrapi } from '@/composables/useStrapi';
import CmsField   from '../components/CmsField.vue';
import SaveStatus from '../components/SaveStatus.vue';

const { getServices, createService, updateService, deleteService } = useStrapi();

const loading    = ref(true);
const loadError  = ref(false);
const saving     = ref(false);
const saveStatus = ref<'idle'|'success'|'error'>('idle');
const services   = ref<any[]>([]);
const modal      = ref(false);
const editing    = ref<any>(null);
const lang       = ref<'en'|'es'>('en');

const svcForm = reactive({ name: '', description: '', name_es: '', description_es: '', order: 0 });

const load = async () => {
    loading.value = true; loadError.value = false;
    try { const res = await getServices(); services.value = res?.data ?? []; }
    catch { loadError.value = true; }
    finally { loading.value = false; }
};

const openNew = () => {
    editing.value = null;
    Object.assign(svcForm, { name: '', description: '', name_es: '', description_es: '', order: services.value.length });
    lang.value = 'en'; modal.value = true; saveStatus.value = 'idle';
};

const openEdit = (svc: any) => {
    editing.value = svc;
    const a = svc.attributes;
    Object.assign(svcForm, { name: a.name ?? '', description: a.description ?? '', name_es: a.name_es ?? '', description_es: a.description_es ?? '', order: a.order ?? 0 });
    lang.value = 'en'; modal.value = true; saveStatus.value = 'idle';
};

const saveService = async () => {
    saving.value = true; saveStatus.value = 'idle';
    try {
        if (editing.value) await updateService(editing.value.id, { ...svcForm });
        else await createService({ ...svcForm });
        saveStatus.value = 'success';
        await load();
        setTimeout(() => { modal.value = false; }, 800);
    } catch { saveStatus.value = 'error'; }
    finally { saving.value = false; }
};

const remove = async (id: number) => {
    if (!confirm('Delete this service?')) return;
    try { await deleteService(id); await load(); }
    catch { alert('Could not delete service.'); }
};

onMounted(load);
</script>

<style scoped>
.section-editor { max-width: 800px; }
.add-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.add-bar h3 { color: #aaa; font-size: 0.9rem; font-weight: 500; }
.btn-add { background: #c0392b; color: #fff; border: none; padding: 9px 20px; border-radius: 6px; font-weight: 700; font-size: 0.88rem; cursor: pointer; transition: background 0.2s; }
.btn-add:hover { background: #a93226; }
.services-list { display: flex; flex-direction: column; gap: 0.5rem; }
.svc-row { display: flex; align-items: center; justify-content: space-between; background: #1a1d27; border: 1px solid #2a2d3a; border-radius: 8px; padding: 0.85rem 1.25rem; }
.svc-info { display: flex; flex-direction: column; gap: 2px; }
.svc-name    { color: #fff; font-weight: 600; font-size: 0.95rem; }
.svc-name-es { color: #555; font-size: 0.82rem; }
.svc-actions { display: flex; gap: 0.5rem; }
.btn-icon { background: none; border: 1px solid #2a2d3a; border-radius: 6px; padding: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.btn-icon svg { width: 16px; height: 16px; }
.btn-icon.edit  { color: #888; } .btn-icon.edit:hover  { background: #232637; color: #fff; }
.btn-icon.delete{ color: #666; } .btn-icon.delete:hover{ background: rgba(192,57,43,0.15); color: #e74c3c; border-color: rgba(192,57,43,0.4); }

/* Modal */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.modal-box { background: #1a1d27; border: 1px solid #2a2d3a; border-radius: 12px; padding: 2rem; width: 100%; max-width: 560px; box-shadow: 0 24px 60px rgba(0,0,0,.6); }
.modal-box h3 { font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 1.5rem; }
.modal-form { display: flex; flex-direction: column; gap: 1.25rem; }
.lang-tabs { display: flex; gap: 0.5rem; }
.lang-tabs button { background: #0f1117; border: 1px solid #2a2d3a; color: #888; padding: 7px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; transition: all 0.2s; }
.lang-tabs button.active { background: rgba(192,57,43,0.2); border-color: #c0392b; color: #e74c3c; }
.modal-actions { display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem; padding-top: 0.5rem; }
.btn-cancel { background: none; border: 1px solid #2a2d3a; color: #888; padding: 9px 20px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s; }
.btn-cancel:hover { background: #232637; color: #ddd; }
.btn-save { background: #c0392b; color: #fff; border: none; padding: 9px 24px; border-radius: 6px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: background 0.2s; }
.btn-save:hover:not(:disabled) { background: #a93226; }
.btn-save:disabled { opacity: 0.55; cursor: not-allowed; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.state-loading { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 4rem; color: #555; }
.state-error   { background: rgba(192,57,43,0.1); border: 1px solid rgba(192,57,43,0.3); border-radius: 8px; padding: 2rem; text-align: center; color: #e74c3c; }
.btn-retry     { margin-top: 1rem; background: #c0392b; color: #fff; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; }
.spinner-lg    { width: 40px; height: 40px; border: 3px solid #2a2d3a; border-top-color: #c0392b; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
