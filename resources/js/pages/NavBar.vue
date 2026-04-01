<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <a href="/">Logo</a>
            </div>
            <ul class="navbar-menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/servicios">Servicios</a></li>
            </ul>
            <button class="navbar-toggle" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.navbar {
    background-color: #333;
    padding: 1rem 0;
    position: sticky;
    top: 0;
}

.navbar-container {
    max-width: 1200px;
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
    color: #4caf50;
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
