<template>
    <section id="home" class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
        <div class="hero-overlay" />
        <div class="hero-content">
            <p class="hero-eyebrow">{{ t.hero.eyebrow }}</p>
            <h1 class="hero-title">{{ t.hero.title }}<br /><span>{{ t.hero.titleSpan }}</span></h1>
            <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
            <div class="hero-actions">
                <a href="#contact" class="btn-primary">{{ t.hero.cta }}</a>
                <a href="tel:+15642098251" class="btn-outline">(564) 209-8251</a>
            </div>
        </div>

        <div class="hero-scroll-hint" @click="scrollDown">
            <span>{{ t.hero.scrollHint }}</span>
            <div class="arrow">↓</div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLangNew } from '@/composables/useLangNew';

import r4  from '@/assets/roof4.jpeg';
import r11 from '@/assets/roof11.jpeg';
import r18 from '@/assets/roof18.jpeg';
import r24 from '@/assets/roof24.jpeg';
import r29 from '@/assets/roof29.jpeg';

const { t } = useLangNew();

const images = [r4, r11, r18, r24, r29];
const heroBg = computed(() => images[Math.floor(Math.random() * images.length)]);

const scrollDown = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 2rem 80px;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.8) 100%);
}

.hero-content { position: relative; z-index: 1; max-width: 820px; }

.hero-eyebrow {
    display: inline-block;
    background: #c0392b;
    color: #fff;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 2px;
    margin-bottom: 1.5rem;
}

.hero-title {
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.12;
    margin-bottom: 1.25rem;
    letter-spacing: -0.02em;
}
.hero-title span { color: #e74c3c; }

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255,255,255,0.85);
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

.btn-primary {
    display: inline-block;
    background: #c0392b;
    color: #fff;
    padding: 16px 36px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: background 0.25s, transform 0.2s;
}
.btn-primary:hover { background: #a93226; transform: translateY(-2px); }

.btn-outline {
    display: inline-block;
    border: 2px solid rgba(255,255,255,0.7);
    color: #fff;
    padding: 15px 36px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: background 0.25s, border-color 0.25s;
}
.btn-outline:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

.hero-scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: rgba(255,255,255,0.6);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
}
.hero-scroll-hint:hover { color: #fff; }
.arrow { font-size: 1.2rem; animation: bounce 1.6s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
</style>