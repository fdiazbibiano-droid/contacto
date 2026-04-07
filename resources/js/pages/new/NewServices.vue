<template>
    <section id="services" class="services">
        <div class="services-inner">
            <div class="section-header">
                <p class="section-eyebrow">{{ t.services.eyebrow }}</p>
                <h2 class="section-title">{{ t.services.title }}</h2>
                <p class="section-sub">{{ t.services.sub }}</p>
            </div>

            <div class="services-grid">
                <article
                    v-for="(svc, i) in t.services.items"
                    :key="svc.name"
                    class="svc-card"
                    :class="{ active: activeCard === i }"
                    :style="{ backgroundImage: `url(${imgs[i]})` }"
                    @touchstart.prevent="toggleCard(i)"
                >
                    <div class="svc-overlay" />
                    <div class="svc-body">
                        <div class="svc-icon" v-html="icons[i]" />
                        <h3>{{ svc.name }}</h3>
                        <p>{{ svc.desc }}</p>
                        <a href="#contact" class="svc-link">{{ t.services.learnMore }}</a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLangNew } from '@/composables/useLangNew';
import r1  from '@/assets/roof1.jpeg';
import r5  from '@/assets/roof5.jpeg';
import r9  from '@/assets/roof9.jpeg';
import r13 from '@/assets/roof13.jpeg';
import r17 from '@/assets/roof17.jpeg';
import r21 from '@/assets/roof21.jpeg';

const { t } = useLangNew();

const activeCard = ref<number | null>(null);
const toggleCard = (i: number) => {
    activeCard.value = activeCard.value === i ? null : i;
};

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }
const imgs = shuffle([r1, r5, r9, r13, r17, r21]);

const icons = [
    `<svg viewBox="0 0 40 40" fill="none"><path d="M4 20L20 6l16 14" stroke="white" stroke-width="2" stroke-linejoin="round"/><rect x="10" y="20" width="20" height="16" stroke="white" stroke-width="2"/><rect x="16" y="26" width="8" height="10" stroke="white" stroke-width="2"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="32" height="6" rx="1" stroke="white" stroke-width="2"/><rect x="4" y="17" width="32" height="6" rx="1" stroke="white" stroke-width="2"/><rect x="4" y="26" width="32" height="6" rx="1" stroke="white" stroke-width="2"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none"><path d="M4 12h32" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M8 12v8a4 4 0 004 4h16a4 4 0 004-4v-8" stroke="white" stroke-width="2"/><path d="M32 24v8" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none"><path d="M10 30L28 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="28" cy="12" r="5" stroke="white" stroke-width="2"/><circle cx="10" cy="30" r="5" stroke="white" stroke-width="2"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none"><path d="M10 8h20v4H10z" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="M14 12v20M20 12v20M26 12v20" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 32h24" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="28" height="28" rx="2" stroke="white" stroke-width="2"/><path d="M6 16h28M16 16v18" stroke="white" stroke-width="2"/></svg>`,
];
</script>

<style scoped>
.services { background: #f6f6f6; padding: 100px 2rem; }

.services-inner { max-width: 1300px; margin: 0 auto; }

.section-header { text-align: center; max-width: 700px; margin: 0 auto 4rem; }

.section-eyebrow {
    font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: #c0392b; margin-bottom: 0.75rem;
}
.section-title {
    font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800;
    color: #111; margin-bottom: 1rem; letter-spacing: -0.02em;
}
.section-sub { color: #666; font-size: 1.05rem; line-height: 1.7; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

.svc-card {
    position: relative; min-height: 320px; border-radius: 6px; overflow: hidden;
    background-size: cover; background-position: center; cursor: pointer; display: flex; align-items: flex-end;
}
.svc-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%);
    transition: background 0.35s;
}
.svc-card:hover .svc-overlay,
.svc-card.active .svc-overlay { background: linear-gradient(to top, rgba(192,57,43,0.92) 0%, rgba(192,57,43,0.6) 100%); }

.svc-body { position: relative; z-index: 1; padding: 2rem 1.75rem; width: 100%; }

.svc-icon { width: 36px; height: 36px; margin-bottom: 0.75rem; opacity: 0.9; }
.svc-icon svg { width: 100%; height: 100%; }

.svc-body h3 { color: #fff; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; }
.svc-body p {
    color: rgba(255,255,255,0.8); font-size: 0.88rem; line-height: 1.6;
    max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s; opacity: 0;
}
.svc-card:hover .svc-body p,
.svc-card.active .svc-body p { max-height: 120px; opacity: 1; }

.svc-link {
    display: inline-block; color: #fff; font-size: 0.85rem; font-weight: 600;
    text-decoration: none; margin-top: 0.75rem; letter-spacing: 0.04em;
    opacity: 0; transform: translateY(6px); transition: opacity 0.3s, transform 0.3s;
}
.svc-card:hover .svc-link,
.svc-card.active .svc-link { opacity: 1; transform: translateY(0); }

@media (max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } .svc-card { min-height: 260px; } }
</style>