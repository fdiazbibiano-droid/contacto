<template>
    <div class="site">
        <NewNavBar />
        <NewHero />
        <NewFeatures />
        <NewStats />
        <NewServices />
        <NewTrust />
        <NewGallery />
        <NewContact />
        <NewFooter />

        <!-- WhatsApp float -->
        <a class="wa-btn" href="https://wa.me/15642098251" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.75 5.5 6.5 9.75 6.5 15c0 1.6.41 3.17 1.2 4.56L6.5 26.5l7.14-1.87A10.45 10.45 0 0 0 16 25.5c5.25 0 9.5-4.25 9.5-9.5a9.44 9.44 0 0 0-2-5Z" fill="white"/>
                <path d="M21.3 18.1c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34Z" fill="#25D366"/>
            </svg>
        </a>

        <!-- Scroll top -->
        <button class="scroll-top" :class="{ visible: showTop }" @click="scrollTop" aria-label="Back to top">↑</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import NewNavBar     from './NewNavBar.vue';
import NewHero       from './NewHero.vue';
import NewFeatures   from './NewFeatures.vue';
import NewStats      from './NewStats.vue';
import NewServices   from './NewServices.vue';
import NewTrust      from './NewTrust.vue';
import NewGallery    from './NewGallery.vue';
import NewContact    from './NewContact.vue';
import NewFooter     from './NewFooter.vue';

const showTop = ref(false);

const handleScroll = () => { showTop.value = window.scrollY > 400; };
const scrollTop    = () => window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(()  => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #222;
    background: #fff;
    overflow-x: hidden;
}
</style>

<style scoped>
.site { position: relative; }

.wa-btn {
    position: fixed;
    bottom: 28px;
    left: 28px;
    width: 58px;
    height: 58px;
    z-index: 999;
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(0,0,0,.3);
    transition: transform .25s;
}
.wa-btn:hover { transform: scale(1.1); }
.wa-btn svg { width: 100%; height: 100%; display: block; }

.scroll-top {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #c0392b;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s, transform .3s;
    transform: translateY(10px);
}
.scroll-top.visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
.scroll-top:hover { background: #a93226; }
</style>
