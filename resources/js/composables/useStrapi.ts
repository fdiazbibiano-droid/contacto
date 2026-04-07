import { ref } from 'vue';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL ?? 'http://localhost:1337';

// ── Auth token persisted in sessionStorage ──────────────────────────────────
const token = ref<string | null>(
    typeof window !== 'undefined' ? sessionStorage.getItem('strapi_token') : null
);

function setToken(t: string | null) {
    token.value = t;
    if (typeof window !== 'undefined') {
        t ? sessionStorage.setItem('strapi_token', t) : sessionStorage.removeItem('strapi_token');
    }
}

// ── Base fetch ───────────────────────────────────────────────────────────────
async function apiFetch<T>(
    path: string,
    options: RequestInit = {}
): Promise<T> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };
    if (token.value) headers['Authorization'] = `Bearer ${token.value}`;

    const res = await fetch(`${STRAPI_URL}${path}`, { ...options, headers });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: { message: res.statusText } }));
        throw new Error(err?.error?.message ?? 'API error');
    }
    return res.json();
}

// ── Auth ─────────────────────────────────────────────────────────────────────
async function login(identifier: string, password: string) {
    const data = await apiFetch<{ jwt: string; user: any }>('/api/auth/local', {
        method: 'POST',
        body: JSON.stringify({ identifier, password }),
    });
    setToken(data.jwt);
    return data.user;
}

function logout() { setToken(null); }

// ── Single types ─────────────────────────────────────────────────────────────
async function getHero()  { return apiFetch<any>('/api/hero?populate=*'); }
async function getAbout() { return apiFetch<any>('/api/about?populate=*'); }
async function getSiteSettings() { return apiFetch<any>('/api/site-setting'); }

async function updateHero(data: Record<string, any>) {
    return apiFetch<any>('/api/hero', { method: 'PUT', body: JSON.stringify({ data }) });
}
async function updateAbout(data: Record<string, any>) {
    return apiFetch<any>('/api/about', { method: 'PUT', body: JSON.stringify({ data }) });
}
async function updateSiteSettings(data: Record<string, any>) {
    return apiFetch<any>('/api/site-setting', { method: 'PUT', body: JSON.stringify({ data }) });
}

// ── Collection types ─────────────────────────────────────────────────────────
async function getServices() {
    return apiFetch<any>('/api/services?sort=order:asc&pagination[pageSize]=25');
}
async function createService(data: Record<string, any>) {
    return apiFetch<any>('/api/services', { method: 'POST', body: JSON.stringify({ data }) });
}
async function updateService(id: number, data: Record<string, any>) {
    return apiFetch<any>(`/api/services/${id}`, { method: 'PUT', body: JSON.stringify({ data }) });
}
async function deleteService(id: number) {
    return apiFetch<any>(`/api/services/${id}`, { method: 'DELETE' });
}

// ── Composable export ────────────────────────────────────────────────────────
export function useStrapi() {
    return {
        token,
        isAuthenticated: () => !!token.value,
        login,
        logout,
        getHero,
        updateHero,
        getAbout,
        updateAbout,
        getSiteSettings,
        updateSiteSettings,
        getServices,
        createService,
        updateService,
        deleteService,
    };
}
