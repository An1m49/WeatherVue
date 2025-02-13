<script setup lang="ts">
defineProps({
    degrees: {
        type: Number,
        default: 999
    },
    feelslike: {
        type: Number,
        default: 999
    },
    condition: {
        type: String,
        default: 'Неизвестно'
    },
    icon: {
        type: String,
        default: null
    }
})
</script>

<template>
    <div class="flex items-center gap-6">
        <div class="">
            <p>{{ degrees }}° (ощущается как {{feelslike}}°)</p>
            <p>{{ condition }}</p>
        </div>
        <img :src="icon" alt="Иконка погоды">
    </div>
</template>

