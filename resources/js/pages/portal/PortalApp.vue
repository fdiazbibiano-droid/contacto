<template>
    <div class="portal">
        <PortalLogin v-if="!authed" @login="onLogin" />
        <PortalDashboard v-else @logout="onLogout" :user="currentUser" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PortalLogin     from './PortalLogin.vue';
import PortalDashboard from './PortalDashboard.vue';
import { useStrapi }   from '@/composables/useStrapi';

const { isAuthenticated } = useStrapi();

const authed      = ref(isAuthenticated());
const currentUser = ref<any>(null);

const onLogin  = (user: any) => { currentUser.value = user; authed.value = true; };
const onLogout = () => { authed.value = false; currentUser.value = null; };
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f1117; color: #e0e0e0; }
</style>
