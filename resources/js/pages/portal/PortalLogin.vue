<template>
    <div class="login-wrap">
        <div class="login-card">
            <div class="login-logo">
                <img src="@/assets/logo2.png" alt="NW Point" />
            </div>
            <h1>Content Portal</h1>
            <p class="login-sub">NW Point Construction LLC</p>

            <form @submit.prevent="submit" class="login-form">
                <div class="field">
                    <label>Email</label>
                    <input
                        v-model="form.identifier"
                        type="email"
                        placeholder="admin@nwpointconstruction.com"
                        autocomplete="username"
                        required
                    />
                </div>
                <div class="field">
                    <label>Password</label>
                    <div class="pw-wrap">
                        <input
                            v-model="form.password"
                            :type="showPw ? 'text' : 'password'"
                            placeholder="••••••••"
                            autocomplete="current-password"
                            required
                        />
                        <button type="button" class="pw-toggle" @click="showPw = !showPw">
                            {{ showPw ? '🙈' : '👁' }}
                        </button>
                    </div>
                </div>

                <p v-if="error" class="error-msg">{{ error }}</p>

                <button type="submit" class="btn-login" :disabled="loading">
                    <span v-if="loading" class="spinner" />
                    <span v-else>Sign In</span>
                </button>
            </form>

            <p class="login-hint">Access restricted to authorized personnel only.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useStrapi } from '@/composables/useStrapi';

const emit = defineEmits<{ login: [user: any] }>();

const { login } = useStrapi();

const form   = reactive({ identifier: '', password: '' });
const loading = ref(false);
const error   = ref('');
const showPw  = ref(false);

const submit = async () => {
    error.value = '';
    loading.value = true;
    try {
        const user = await login(form.identifier, form.password);
        emit('login', user);
    } catch (e: any) {
        error.value = 'Invalid email or password.';
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.login-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f1117;
    padding: 2rem;
}

.login-card {
    background: #1a1d27;
    border: 1px solid #2a2d3a;
    border-radius: 12px;
    padding: 3rem 2.5rem;
    width: 100%;
    max-width: 420px;
    text-align: center;
    box-shadow: 0 24px 60px rgba(0,0,0,.5);
}

.login-logo img {
    height: 56px;
    width: auto;
    margin-bottom: 1.5rem;
}

h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.25rem;
}

.login-sub {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 2rem;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: left;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.field label {
    font-size: 0.82rem;
    font-weight: 600;
    color: #aaa;
    letter-spacing: 0.04em;
}

.field input {
    background: #0f1117;
    border: 1.5px solid #2a2d3a;
    border-radius: 6px;
    color: #fff;
    font-size: 0.95rem;
    padding: 0.75rem 1rem;
    transition: border-color 0.2s;
    width: 100%;
    font-family: inherit;
}
.field input:focus { outline: none; border-color: #c0392b; }
.field input::placeholder { color: #444; }

.pw-wrap { position: relative; }
.pw-wrap input { padding-right: 3rem; }
.pw-toggle {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #666;
    padding: 0;
    line-height: 1;
}

.error-msg {
    background: rgba(192,57,43,0.15);
    border: 1px solid rgba(192,57,43,0.4);
    color: #e74c3c;
    padding: 0.65rem 1rem;
    border-radius: 6px;
    font-size: 0.88rem;
    text-align: center;
}

.btn-login {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.85rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
}
.btn-login:hover:not(:disabled) { background: #a93226; }
.btn-login:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }

.login-hint {
    font-size: 0.75rem;
    color: #444;
    margin-top: 1.75rem;
}
</style>
