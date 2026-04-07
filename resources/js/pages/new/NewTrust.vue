<template>
    <section class="trust">
        <div class="trust-inner">
            <div class="trust-text">
                <p class="section-eyebrow">{{ t.trust.eyebrow }}</p>
                <h2>{{ t.trust.title.split('\n')[0] }}<br />{{ t.trust.title.split('\n')[1] }}</h2>
                <p class="trust-intro">{{ t.trust.intro }}</p>

                <ul class="trust-list">
                    <li v-for="item in t.trust.points" :key="item.title">
                        <div class="trust-check">✓</div>
                        <div>
                            <strong>{{ item.title }}</strong>
                            <span>{{ item.desc }}</span>
                        </div>
                    </li>
                </ul>

                <a href="#contact" class="btn-trust">{{ t.trust.cta }}</a>
            </div>

            <div class="trust-visual">
                <img :src="img" alt="Professional roofing work" class="trust-img" />
                <div class="badges">
                    <div v-for="b in t.trust.badges" :key="b.title" class="badge">
                        <span class="badge-value">{{ b.value }}</span>
                        <span class="badge-label">{{ b.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useLangNew } from '@/composables/useLangNew';
import r3  from '@/assets/roof3.jpeg';
import r12 from '@/assets/roof12.jpeg';
import r19 from '@/assets/roof19.jpeg';
import r27 from '@/assets/roof27.jpeg';

const { t } = useLangNew();

const imgs = [r3, r12, r19, r27];
const img  = imgs[Math.floor(Math.random() * imgs.length)];
</script>

<style scoped>
.trust { background: #fff; padding: 100px 2rem; }

.trust-inner {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
}

.section-eyebrow {
    font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: #c0392b; margin-bottom: 0.75rem;
}

.trust-text h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800;
    color: #111; line-height: 1.15; margin-bottom: 1.25rem; letter-spacing: -0.02em;
}

.trust-intro { color: #555; font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }

.trust-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem; }
.trust-list li { display: flex; gap: 1rem; align-items: flex-start; }

.trust-check {
    flex-shrink: 0; width: 26px; height: 26px; background: #c0392b; color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; font-weight: 700; margin-top: 2px;
}

.trust-list strong { display: block; color: #111; font-weight: 700; margin-bottom: 2px; }
.trust-list span   { color: #666; font-size: 0.92rem; line-height: 1.5; }

.btn-trust {
    display: inline-block; background: #c0392b; color: #fff;
    padding: 15px 32px; border-radius: 4px; font-weight: 700; font-size: 0.95rem;
    text-decoration: none; letter-spacing: 0.04em; transition: background 0.25s, transform 0.2s;
}
.btn-trust:hover { background: #a93226; transform: translateY(-2px); }

.trust-visual { position: relative; }

.trust-img {
    width: 100%; aspect-ratio: 4/3; object-fit: cover;
    border-radius: 6px; display: block; box-shadow: 0 20px 60px rgba(0,0,0,.18);
}

.badges {
    position: absolute; bottom: -28px; left: -28px;
    display: flex; flex-direction: column; gap: 0.5rem;
}

.badge {
    background: #c0392b; color: #fff; border-radius: 4px; padding: 10px 18px;
    display: flex; align-items: center; gap: 10px;
    box-shadow: 0 4px 16px rgba(192,57,43,.4); min-width: 160px;
}
.badge-value { font-size: 1.5rem; font-weight: 800; line-height: 1; }
.badge-label { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; line-height: 1.3; }

@media (max-width: 900px) {
    .trust-inner { grid-template-columns: 1fr; gap: 3rem; }
    .badges { position: static; flex-direction: row; flex-wrap: wrap; margin-top: 1rem; }
    .badge { min-width: auto; }
}
</style>