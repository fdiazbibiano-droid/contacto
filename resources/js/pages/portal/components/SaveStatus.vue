<template>
    <Transition name="fade">
        <span v-if="status !== 'idle'" class="status" :class="status">
            {{ status === 'success' ? '✓ Saved successfully' : '✗ Error saving. Try again.' }}
        </span>
    </Transition>
</template>

<script setup lang="ts">
defineProps<{ status: 'idle' | 'success' | 'error' }>();
</script>

<style scoped>
.status { font-size: 0.85rem; font-weight: 600; }
.status.success { color: #2ecc71; }
.status.error   { color: #e74c3c; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
