<template>
    <section id="contact" class="contact">
        <div class="contact-inner">
            <div class="contact-info">
                <p class="section-eyebrow">{{ t.contact.eyebrow }}</p>
                <h2>{{ t.contact.title.split('\n')[0] }}<br />{{ t.contact.title.split('\n')[1] }}</h2>
                <p class="contact-intro">{{ t.contact.intro }}</p>

                <ul class="info-list">
                    <li>
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div>
                            <strong>{{ t.contact.phone }}</strong>
                            <a href="tel:+15642098251">(564) 209-8251</a>
                        </div>
                    </li>
                    <li>
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" stroke-width="1.8"/><polyline points="22,6 12,13 2,6" stroke="white" stroke-width="1.8" stroke-linejoin="round"/></svg>
                        </div>
                        <div>
                            <strong>{{ t.contact.email }}</strong>
                            <a href="mailto:info@nwpointconstruction.com">info@nwpointconstruction.com</a>
                        </div>
                    </li>
                    <li>
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="white" stroke-width="1.8"/><circle cx="12" cy="10" r="3" stroke="white" stroke-width="1.8"/></svg>
                        </div>
                        <div>
                            <strong>{{ t.contact.area }}</strong>
                            <span>{{ t.contact.areaVal }}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="contact-form-wrap">
                <div v-if="sent" class="form-success">
                    <div class="success-icon">✓</div>
                    <h3>{{ t.contact.successTitle }}</h3>
                    <p>{{ t.contact.successSub }}</p>
                    <button @click="sent = false; resetForm()">{{ t.contact.successBtn }}</button>
                </div>

                <form v-else @submit.prevent="submitForm" class="form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>{{ t.contact.nameLbl }}</label>
                            <input v-model="form.name" type="text" :placeholder="t.contact.namePh" required />
                        </div>
                        <div class="form-group">
                            <label>{{ t.contact.phoneLbl }}</label>
                            <input v-model="form.phone" type="tel" :placeholder="t.contact.phonePh" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.emailLbl }}</label>
                        <input v-model="form.email" type="email" :placeholder="t.contact.emailPh" required />
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.serviceLbl }}</label>
                        <select v-model="form.service">
                            <option value="">{{ t.contact.servicePh }}</option>
                            <option v-for="svc in t.contact.services" :key="svc" :value="svc">{{ svc }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.msgLbl }}</label>
                        <textarea v-model="form.message" rows="5" :placeholder="t.contact.msgPh" required />
                    </div>
                    <button type="submit" class="btn-submit" :disabled="submitting">
                        {{ submitting ? t.contact.sending : t.contact.submit }}
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useLangNew } from '@/composables/useLangNew';

const { t } = useLangNew();

const submitting = ref(false);
const sent       = ref(false);
const form       = reactive({ name: '', phone: '', email: '', service: '', message: '' });

const resetForm  = () => { form.name = ''; form.phone = ''; form.email = ''; form.service = ''; form.message = ''; };

const submitForm = async () => {
    submitting.value = true;
    await new Promise(r => setTimeout(r, 1200));
    submitting.value = false;
    sent.value = true;
};
</script>

<style scoped>
.contact { background: #f5f5f5; padding: 100px 2rem; }

.contact-inner {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start;
}

.section-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #c0392b; margin-bottom: 0.75rem; }

.contact-info h2 { font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; color: #111; line-height: 1.2; margin-bottom: 1.25rem; }

.contact-intro { color: #555; font-size: 1rem; line-height: 1.7; margin-bottom: 2.5rem; }

.info-list { list-style: none; display: flex; flex-direction: column; gap: 1.5rem; }
.info-list li { display: flex; align-items: flex-start; gap: 1rem; }

.info-icon {
    flex-shrink: 0; width: 44px; height: 44px; background: #c0392b; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; margin-top: 2px;
}
.info-icon svg { width: 20px; height: 20px; }

.info-list strong { display: block; color: #111; font-weight: 700; margin-bottom: 2px; font-size: 0.9rem; }
.info-list a, .info-list span { color: #555; text-decoration: none; font-size: 0.95rem; }
.info-list a:hover { color: #c0392b; }

.contact-form-wrap { background: #fff; border-radius: 8px; padding: 2.5rem 2rem; box-shadow: 0 8px 40px rgba(0,0,0,.09); }

.form { display: flex; flex-direction: column; gap: 1.25rem; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }

.form-group { display: flex; flex-direction: column; gap: 0.4rem; }

.form-group label { font-size: 0.85rem; font-weight: 600; color: #333; letter-spacing: 0.02em; }

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.75rem 1rem; border: 1.5px solid #e0e0e0; border-radius: 4px;
    font-size: 0.95rem; font-family: inherit; color: #222;
    transition: border-color 0.2s; background: #fafafa; width: 100%;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { outline: none; border-color: #c0392b; background: #fff; }
.form-group textarea { resize: vertical; min-height: 120px; }

.btn-submit {
    background: #c0392b; color: #fff; border: none;
    padding: 15px 28px; border-radius: 4px; font-size: 1rem; font-weight: 700;
    cursor: pointer; letter-spacing: 0.04em; transition: background 0.25s, transform 0.2s; margin-top: 0.25rem;
}
.btn-submit:hover:not(:disabled) { background: #a93226; transform: translateY(-1px); }
.btn-submit:disabled { opacity: 0.65; cursor: not-allowed; }

.form-success { text-align: center; padding: 3rem 1rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.success-icon { width: 64px; height: 64px; background: #c0392b; color: #fff; border-radius: 50%; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; }
.form-success h3 { font-size: 1.5rem; color: #111; }
.form-success p  { color: #666; }
.form-success button {
    margin-top: 0.5rem; background: none; border: 1.5px solid #c0392b; color: #c0392b;
    padding: 10px 24px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 0.9rem; transition: background 0.2s, color 0.2s;
}
.form-success button:hover { background: #c0392b; color: #fff; }

@media (max-width: 900px) { .contact-inner { grid-template-columns: 1fr; gap: 3rem; } }
@media (max-width: 520px) { .form-row { grid-template-columns: 1fr; } .contact-form-wrap { padding: 1.75rem 1.25rem; } }
</style>