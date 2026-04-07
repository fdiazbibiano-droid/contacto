<template>
    <section class="stats" :style="{ backgroundImage: `url(${bg})` }">
        <div class="stats-overlay" />
        <div class="stats-inner">
            <div v-for="s in t.stats" :key="s.label" class="stat-item">
                <span class="stat-number">{{ s.number }}</span>
                <span class="stat-label">{{ s.label }}</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useLangNew } from '@/composables/useLangNew';
import r6  from '@/assets/roof6.jpeg';
import r14 from '@/assets/roof14.jpeg';
import r22 from '@/assets/roof22.jpeg';
import r30 from '@/assets/roof30.jpeg';

const { t } = useLangNew();

const bgs = [r6, r14, r22, r30];
const bg  = bgs[Math.floor(Math.random() * bgs.length)];
</script>

<style scoped>
.stats {
    position: relative;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 100px 2rem;
}
.stats-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.72); }

.stats-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 1rem;
    border-left: 1px solid rgba(192,57,43,0.4);
}
.stat-item:first-child { border-left: none; }

.stat-number {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: #e74c3c;
    line-height: 1;
    letter-spacing: -0.02em;
}
.stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 500;
}

@media (max-width: 700px) {
    .stats-inner { grid-template-columns: 1fr 1fr; }
    .stat-item:nth-child(2) { border-left: 1px solid rgba(192,57,43,0.4); }
    .stat-item:nth-child(3) { border-left: none; }
    .stats { background-attachment: scroll; }
}
@media (max-width: 420px) {
    .stats-inner { grid-template-columns: 1fr; }
    .stat-item { border-left: none !important; border-bottom: 1px solid rgba(192,57,43,0.3); }
    .stat-item:last-child { border-bottom: none; }
}
</style>