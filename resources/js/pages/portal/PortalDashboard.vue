<template>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-logo">
                <img src="@/assets/logo2.png" alt="NW Point" />
                <span>CMS Portal</span>
            </div>

            <nav class="sidebar-nav">
                <button
                    v-for="sec in sections"
                    :key="sec.id"
                    class="nav-item"
                    :class="{ active: activeSection === sec.id }"
                    @click="activeSection = sec.id"
                >
                    <span class="nav-icon" v-html="sec.icon" />
                    {{ sec.label }}
                </button>
            </nav>

            <div class="sidebar-user">
                <div class="user-info">
                    <div class="user-avatar">{{ userInitial }}</div>
                    <div>
                        <p class="user-name">{{ props.user?.username ?? 'Admin' }}</p>
                        <p class="user-role">Administrator</p>
                    </div>
                </div>
                <button class="btn-logout" @click="doLogout" title="Sign out">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
                    </svg>
                </button>
            </div>
        </aside>

        <!-- Main content -->
        <main class="main">
            <header class="main-header">
                <h2>{{ currentSection?.label }}</h2>
                <p class="header-sub">{{ currentSection?.description }}</p>
            </header>

            <div class="main-body">
                <SectionHero        v-if="activeSection === 'hero'" />
                <SectionAbout       v-else-if="activeSection === 'about'" />
                <SectionServices    v-else-if="activeSection === 'services'" />
                <SectionSiteSettings v-else-if="activeSection === 'settings'" />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStrapi }         from '@/composables/useStrapi';
import SectionHero           from './sections/SectionHero.vue';
import SectionAbout          from './sections/SectionAbout.vue';
import SectionServices       from './sections/SectionServices.vue';
import SectionSiteSettings   from './sections/SectionSiteSettings.vue';

const props = defineProps<{ user: any }>();
const emit  = defineEmits<{ logout: [] }>();

const { logout } = useStrapi();

const activeSection = ref('hero');

const sections = [
    {
        id: 'hero', label: 'Hero Section', description: 'Edit the main banner of the homepage.',
        icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,
    },
    {
        id: 'about', label: 'About Section', description: 'Edit the About Us section.',
        icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`,
    },
    {
        id: 'services', label: 'Services', description: 'Add, edit or remove services.',
        icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/></svg>`,
    },
    {
        id: 'settings', label: 'Site Settings', description: 'Phone, email, address and social links.',
        icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>`,
    },
];

const currentSection = computed(() => sections.find(s => s.id === activeSection.value));
const userInitial    = computed(() => (props.user?.username ?? 'A')[0].toUpperCase());

const doLogout = () => { logout(); emit('logout'); };
</script>

<style scoped>
.dashboard {
    display: flex;
    min-height: 100vh;
    background: #0f1117;
}

/* ── Sidebar ──────────────────────────────────────────────── */
.sidebar {
    width: 260px;
    flex-shrink: 0;
    background: #1a1d27;
    border-right: 1px solid #2a2d3a;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 1px solid #2a2d3a;
}
.sidebar-logo img { height: 36px; width: auto; }
.sidebar-logo span { font-weight: 700; font-size: 0.95rem; color: #fff; }

.sidebar-nav {
    flex: 1;
    padding: 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: none;
    border: none;
    color: #888;
    padding: 0.7rem 0.85rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: left;
    transition: background 0.2s, color 0.2s;
    width: 100%;
}
.nav-item:hover { background: #232637; color: #ddd; }
.nav-item.active { background: rgba(192,57,43,0.15); color: #e74c3c; font-weight: 600; }

.nav-icon { width: 18px; height: 18px; flex-shrink: 0; }
.nav-icon svg { width: 100%; height: 100%; }

.sidebar-user {
    border-top: 1px solid #2a2d3a;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
}

.user-info { display: flex; align-items: center; gap: 0.75rem; overflow: hidden; }

.user-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: #c0392b; color: #fff; font-weight: 700; font-size: 0.9rem;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.user-name  { font-size: 0.88rem; font-weight: 600; color: #ddd; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.user-role  { font-size: 0.75rem; color: #555; }

.btn-logout {
    background: none; border: 1px solid #2a2d3a; border-radius: 6px;
    color: #666; cursor: pointer; padding: 6px; display: flex;
    align-items: center; justify-content: center; flex-shrink: 0;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.btn-logout:hover { background: rgba(192,57,43,0.15); color: #e74c3c; border-color: rgba(192,57,43,0.4); }
.btn-logout svg { width: 16px; height: 16px; }

/* ── Main ─────────────────────────────────────────────────── */
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.main-header {
    padding: 2rem 2.5rem 1.25rem;
    border-bottom: 1px solid #1e2130;
    background: #0f1117;
}
.main-header h2 { font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 0.2rem; }
.header-sub     { font-size: 0.88rem; color: #555; }

.main-body { flex: 1; padding: 2rem 2.5rem; overflow-y: auto; }

@media (max-width: 768px) {
    .dashboard { flex-direction: column; }
    .sidebar { width: 100%; border-right: none; border-bottom: 1px solid #2a2d3a; }
    .sidebar-nav { flex-direction: row; overflow-x: auto; padding: 0.5rem; gap: 0.25rem; }
    .nav-item { white-space: nowrap; }
    .main-body { padding: 1.25rem; }
}
</style>
