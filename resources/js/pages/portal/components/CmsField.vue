<template>
    <div class="cms-field">
        <label>{{ label }}</label>
        <textarea
            v-if="type === 'textarea'"
            :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            :required="required"
            rows="4"
        />
        <input
            v-else
            :type="type"
            :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            :required="required"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label:       string;
    modelValue:  string | number;
    type?:       string;
    required?:   boolean;
}>();

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();
</script>

<style scoped>
.cms-field { display: flex; flex-direction: column; gap: 0.4rem; }

label {
    font-size: 0.82rem;
    font-weight: 600;
    color: #888;
    letter-spacing: 0.04em;
}

input, textarea {
    background: #0f1117;
    border: 1.5px solid #2a2d3a;
    border-radius: 6px;
    color: #e0e0e0;
    font-size: 0.95rem;
    font-family: inherit;
    padding: 0.7rem 0.9rem;
    width: 100%;
    transition: border-color 0.2s;
    resize: vertical;
}
input:focus, textarea:focus { outline: none; border-color: #c0392b; }
input::placeholder, textarea::placeholder { color: #3a3d4a; }
</style>
