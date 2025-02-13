<script setup lang="ts">
defineProps({
    wind: {
        type: Number,
        default: 100
    }
})
</script>

<template>
    <div class="">
        <p>Ветер: {{ wind }} км/ч</p>
    </div>
</template>

