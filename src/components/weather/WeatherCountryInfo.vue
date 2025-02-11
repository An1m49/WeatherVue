<script setup lang="ts">
defineProps({
    city: {
        type: String,
        default: 'Какой-то город'
    },
    country: {
        type: String,
        default: 'Какая-то страна'
    },
    localTime: {
        type: String,
        default: 'Какое-то время'
    }
})
</script>

<template>
    <div class="">
        <p class="mb-2">Город: {{ city }}</p>
        <p class="mb-2">Страна: {{ country }}</p>
        <p>Местное время: {{ localTime }}</p>
    </div>
</template>

