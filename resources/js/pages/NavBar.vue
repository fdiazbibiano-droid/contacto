<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <a href="#inicio" id="logo"><img src="@/assets/logo2.png" alt="Logo" width="50" height="50"/></a>
            </div>
            <ul class="navbar-menu" :class="{ open: isOpen }">
                <li><a href="#inicio" @click="isOpen = false">{{ t.nav.home }}</a></li>
                <li><a href="#nosotros" @click="isOpen = false">{{ t.nav.about }}</a></li>
                <li><a href="#servicios" @click="isOpen = false">{{ t.nav.services }}</a></li>
                <li><a href="#contacto" @click="isOpen = false">{{ t.nav.contact }}</a></li>
            </ul>
            <div class="navbar-actions">
                <button class="lang-toggle" @click="toggleLang" :title="locale === 'en' ? 'Cambiar a Español' : 'Switch to English'">
                    {{ locale === 'en' ? 'ES' : 'EN' }}
                </button>
                <button class="navbar-toggle" @click="toggleMenu" :class="{ active: isOpen }" aria-label="Menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLang } from '@/composables/useLang';

const { locale, t, toggleLang } = useLang();

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbar {
    max-width: 100%;
    background-color: #333;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-container {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.navbar-brand a {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}

.navbar-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.navbar-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.navbar-menu a:hover {
    color: #bf422f;
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.lang-toggle {
    background: transparent;
    border: 1px solid white;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 20px;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: background-color 0.3s, color 0.3s;
}

.lang-toggle:hover {
    background-color: white;
    color: #333;
}

.navbar-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.navbar-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.navbar-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.navbar-toggle.active span:nth-child(2) {
    opacity: 0;
}

.navbar-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
    .navbar-menu {
        display: none;
        flex-direction: column;
        gap: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #333;
        padding: 0.5rem 0;
    }

    .navbar-menu.open {
        display: flex;
    }

    .navbar-menu li {
        width: 100%;
    }

    .navbar-menu a {
        display: block;
        padding: 0.75rem 2rem;
    }

    .navbar-toggle {
        display: flex;
    }

    .navbar {
        position: relative;
    }
}
</style>
