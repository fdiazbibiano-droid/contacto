<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <a href="/">Logo</a>
            </div>
            <ul class="navbar-menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Servicios</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
            <button class="navbar-toggle" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

.navbar-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    .navbar-menu {
        display: none;
    }

    .navbar-toggle {
        display: block;
    }
}
</style>
