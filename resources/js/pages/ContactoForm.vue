<template>
    <div class="app">
        <!-- Main Content -->
        <div class="container">
            <!-- Formulario de Contacto -->
            <div class="form-section">
                <h2>{{ t.contact.title }}</h2>
                <div v-if="successMessage" class="alert-success">
                    {{ successMessage }}
                </div>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label>{{ t.contact.name }}</label>
                        <input v-model="form.name" type="text" required />
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.email }}</label>
                        <input v-model="form.email" type="email" required />
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.phone }}</label>
                        <input v-model="form.phone" type="tel" />
                    </div>
                    <div class="form-group">
                        <label>{{ t.contact.message }}</label>
                        <textarea
                            v-model="form.message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="btn-submit"
                        :disabled="form.processing"
                    >
                        {{ form.processing ? t.contact.sending : t.contact.send }}
                    </button>
                </form>
            </div>

            <!-- Google Maps -->
            <div class="map-section">
                <h2>{{ t.contact.location }}</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0185263335637!2d-122.41941592346047!3d37.77492997121568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ff735efd%3A0x75dd82cc57667f10!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                >
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { route } from 'ziggy-js';
import { computed } from 'vue';
import { usePage, useForm } from '@inertiajs/vue3';
import { useLang } from '@/composables/useLang';

const { t } = useLang();

const page = usePage();
const successMessage = computed(() => (page.props as any).flash?.success);

const form = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
});

const submitForm = () => {
    form.post(route('contact.send'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    overflow-x: hidden;
}
</style>

<style scoped>
.app {
    font-family: Arial, sans-serif;
}

.container {
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0 20px;
}

.alert-success {
    background-color: #d4edda;
    color: #155724;
    padding: 15px;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: center;
}

.form-section,
.map-section {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 1.5rem;
    color: #333;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #bf422f;
    box-shadow: 0 0 5px rgba(98, 105, 98, 0.3);
}

.btn-submit {
    width: 100%;
    padding: 0.75rem;
    background-color: #bf422f;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-submit:hover {
    background-color: #a83828;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
