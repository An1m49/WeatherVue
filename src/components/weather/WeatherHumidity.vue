<script setup lang="ts">
defineProps({
    humidity: {
        type: Number,
        default: 100
    }
})
</script>

<template>
    <div class="flex items-center gap-2">
        <p>Влажность: {{ humidity }}%</p>
        <span class="material-icons">beach_access</span>
    </div>
</template>

