<template>
    <section class="gallery">
        <div class="gallery-inner">
            <div class="section-header">
                <p class="section-eyebrow">{{ t.gallery.eyebrow }}</p>
                <h2 class="section-title">{{ t.gallery.title }}</h2>
                <p class="section-sub">{{ t.gallery.sub }}</p>
            </div>

            <div class="gallery-grid">
                <div
                    v-for="(img, i) in displayed"
                    :key="i"
                    class="gallery-item"
                    :class="{ featured: i === 0 }"
                    :style="{ backgroundImage: `url(${img})` }"
                    @click="open(img)"
                />
            </div>

            <Transition name="fade">
                <div v-if="lightbox" class="lightbox" @click.self="lightbox = null">
                    <button class="lb-close" @click="lightbox = null">✕</button>
                    <img :src="lightbox" alt="Project photo" />
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLangNew } from '@/composables/useLangNew';
import r2  from '@/assets/roof2.jpeg';
import r7  from '@/assets/roof7.jpeg';
import r8  from '@/assets/roof8.jpeg';
import r10 from '@/assets/roof10.jpeg';
import r16 from '@/assets/roof16.jpeg';
import r20 from '@/assets/roof20.jpeg';
import r23 from '@/assets/roof23.jpeg';
import r25 from '@/assets/roof25.jpeg';
import r26 from '@/assets/roof26.jpeg';
import r28 from '@/assets/roof28.jpeg';
import r31 from '@/assets/roof31.jpeg';
import r32 from '@/assets/roof32.jpeg';

const { t } = useLangNew();

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

const displayed = shuffle([r2, r7, r8, r10, r16, r20, r23, r25, r26, r28, r31, r32]).slice(0, 9);
const lightbox  = ref<string | null>(null);
const open      = (img: string) => { lightbox.value = img; };
</script>

<style scoped>
.gallery { background: #111; padding: 100px 2rem; }

.gallery-inner { max-width: 1300px; margin: 0 auto; }

.section-header { text-align: center; max-width: 600px; margin: 0 auto 3.5rem; }

.section-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #e74c3c; margin-bottom: 0.6rem; }
.section-title   { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin-bottom: 0.8rem; }
.section-sub     { color: #888; font-size: 1rem; line-height: 1.65; }

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
    gap: 12px;
}

.gallery-item {
    background-size: cover; background-position: center; border-radius: 4px;
    cursor: pointer; overflow: hidden; transition: transform 0.35s; position: relative;
}
.gallery-item::after { content: ''; position: absolute; inset: 0; background: rgba(192,57,43,0); transition: background 0.3s; }
.gallery-item:hover { transform: scale(1.02); }
.gallery-item:hover::after { background: rgba(192,57,43,0.2); }
.gallery-item.featured { grid-row: span 2; }

.lightbox {
    position: fixed; inset: 0; background: rgba(0,0,0,0.92);
    z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 2rem;
}
.lightbox img { max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 4px; box-shadow: 0 0 60px rgba(0,0,0,.8); }
.lb-close {
    position: absolute; top: 1.5rem; right: 1.5rem;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
    color: #fff; width: 44px; height: 44px; border-radius: 50%; font-size: 1rem;
    cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
}
.lb-close:hover { background: #c0392b; border-color: #c0392b; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 860px) { .gallery-grid { grid-template-columns: 1fr 1fr; } .gallery-item.featured { grid-row: span 1; } }
@media (max-width: 540px) { .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 200px; } }
</style>