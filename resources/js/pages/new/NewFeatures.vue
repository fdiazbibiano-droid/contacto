<template>
    <section id="features" class="features">
        <div class="features-inner">
            <div v-for="(item, i) in t.features" :key="i" class="feature-card">
                <div class="feature-icon" v-html="icons[i]" />
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useLangNew } from '@/composables/useLangNew';

const { t } = useLangNew();

const icons = [
    `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#c0392b" stroke-width="2.5"/><path d="M14 24l7 7 13-14" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="12" width="36" height="26" rx="3" stroke="#c0392b" stroke-width="2.5"/><path d="M6 20h36" stroke="#c0392b" stroke-width="2.5"/><path d="M16 30h8" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 48 48" fill="none"><path d="M24 5l4.5 9 10 1.5-7.25 7 1.7 10L24 28l-8.95 4.5 1.7-10L9.5 15.5 19.5 14z" stroke="#c0392b" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
    `<svg viewBox="0 0 48 48" fill="none"><path d="M24 6L8 14v10c0 10 7.2 18.8 16 22 8.8-3.2 16-12 16-22V14L24 6z" stroke="#c0392b" stroke-width="2.5" stroke-linejoin="round"/><path d="M17 24l5 5 9-10" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
];
</script>

<style scoped>
.features { background: #1a1a1a; padding: 0; }

.features-inner {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.feature-card {
    padding: 3rem 2.5rem;
    border-right: 1px solid #2c2c2c;
    transition: background 0.3s;
}
.feature-card:last-child { border-right: none; }
.feature-card:hover { background: #222; }

.feature-icon { width: 52px; height: 52px; margin-bottom: 1.25rem; }
.feature-icon svg { width: 100%; height: 100%; }

.feature-card h3 { color: #fff; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.65rem; }
.feature-card p  { color: #999; font-size: 0.92rem; line-height: 1.65; }

@media (max-width: 900px) {
    .features-inner { grid-template-columns: 1fr 1fr; }
    .feature-card { border-right: 1px solid #2c2c2c; border-bottom: 1px solid #2c2c2c; }
    .feature-card:nth-child(2n) { border-right: none; }
    .feature-card:nth-last-child(-n+2) { border-bottom: none; }
}
@media (max-width: 560px) {
    .features-inner { grid-template-columns: 1fr; }
    .feature-card { border-right: none !important; }
    .feature-card:last-child { border-bottom: none; }
}
</style>