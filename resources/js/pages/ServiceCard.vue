<template>
    <div class="service-card" :style="{ backgroundImage: `url(${image})` }">
        <div class="card-overlay"></div>
        <div class="card-content">
            <h2>{{ t.services.label }}</h2>
            <h3>{{ title }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang';

defineProps<{
    image: string;
    title: string;
}>();

const { t } = useLang();
</script>

<style scoped>
.service-card {
    position: relative;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.card-overlay {
    position: absolute;
    inset: 0;
    background: inherit;
    background-size: cover;
    background-position: center;
    transition: opacity 0.4s ease;
    opacity: 1;
}

.card-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(238, 58, 58, 0.9);
    color: white;
    opacity: 0;
    transition: opacity 0.4s ease;
    padding: 20px;
}

.card-content h2 {
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
    opacity: 0.8;
}

.card-content h3 {
    font-size: 1.4em;
    text-align: center;
    font-weight: bold;
}

.service-card:hover .card-overlay {
    opacity: 0;
}

.service-card:hover .card-content {
    opacity: 1;
}
</style>
