<template>
    <nav class="navbar" :class="{ scrolled: isScrolled }">
        <div class="nav-inner">
            <a href="#home" class="logo">
                <img src="@/assets/logo2.png" alt="NW Point Construction LLC" />
            </a>

            <ul class="nav-links" :class="{ open: menuOpen }">
                <li><a href="#home"     @click="close">{{ t.nav.home }}</a></li>
                <li><a href="#services" @click="close">{{ t.nav.roofing }}</a></li>
                <li><a href="#services" @click="close">{{ t.nav.siding }}</a></li>
                <li><a href="#services" @click="close">{{ t.nav.gutters }}</a></li>
                <li><a href="#services" @click="close">{{ t.nav.repairs }}</a></li>
                <li><a href="#contact"  @click="close">{{ t.nav.contact }}</a></li>
                <li class="nav-phone"><a href="tel:+15642098251">{{ t.nav.phone }}</a></li>
                <li>
                    <a href="#contact" class="btn-estimate" @click="close">{{ t.nav.cta }}</a>
                </li>
            </ul>

            <div class="nav-right">
                <button class="lang-btn" @click="toggleLang" :title="locale === 'en' ? 'Cambiar a Español' : 'Switch to English'">
                    <span class="lang-flag">{{ locale === 'en' ? '🇲🇽' : '🇺🇸' }}</span>
                    <span class="lang-label">{{ locale === 'en' ? 'ES' : 'EN' }}</span>
                </button>
                <button class="burger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLangNew } from '@/composables/useLangNew';

const { locale, t, toggleLang } = useLangNew();

const menuOpen   = ref(false);
const isScrolled = ref(false);

const close    = () => { menuOpen.value = false; };
const onScroll = () => { isScrolled.value = window.scrollY > 50; };

onMounted(()  => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.navbar {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 1000;
    background: rgba(5, 5, 5, 0.72);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background 0.3s;
}
.navbar.scrolled {
    background: rgba(5, 5, 5, 0.97);
    box-shadow: 0 2px 20px rgba(0,0,0,.5);
}

.nav-inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
}

.logo img { height: 52px; width: auto; display: block; }

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1.4rem;
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: center;
}

.nav-links a {
    color: #ddd;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    transition: color 0.2s;
    white-space: nowrap;
}
.nav-links a:hover { color: #fff; }

.nav-phone a { color: #fff !important; font-weight: 700 !important; font-size: 0.92rem !important; }

.btn-estimate {
    background: #c0392b;
    color: #fff !important;
    padding: 9px 18px;
    border-radius: 3px;
    font-weight: 700 !important;
    font-size: 0.78rem !important;
    letter-spacing: 0.07em;
    transition: background 0.2s !important;
}
.btn-estimate:hover { background: #9b2d21 !important; }

/* Right side: lang + burger */
.nav-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
}

.lang-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: background 0.25s, border-color 0.25s;
    white-space: nowrap;
}
.lang-btn:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.5); }
.lang-flag { font-size: 1rem; line-height: 1; }

/* Hamburger */
.burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
}
.burger span { display: block; width: 26px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.3s ease; }
.burger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 1050px) {
    .burger { display: flex; }

    .nav-links {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        position: absolute;
        top: 76px;
        left: 0;
        width: 100%;
        background: #0a0a0a;
        padding: 0.75rem 0 1.5rem;
        border-top: 1px solid #222;
    }
    .nav-links.open { display: flex; }
    .nav-links li { width: 100%; }
    .nav-links a { display: block; padding: 0.8rem 2rem; font-size: 1rem !important; }
    .btn-estimate {
        margin: 0.5rem 2rem;
        display: inline-block;
        width: calc(100% - 4rem);
        text-align: center;
        padding: 12px 20px !important;
    }
}
</style>