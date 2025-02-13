<script setup lang="ts">
import { extractTime } from "@/utils";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules';

defineProps({
    hours: {
        type: Array,
        default: () => []
    }
})

const modules = [Pagination, Navigation];
</script>

<template>
    <swiper  :modules="modules" navigation :slidesPerView="2" :space-between="10" class="mySwiper">
        <swiper-slide class="mb-6 p-6 !h-[260px] border-2 rounded-md relative"   v-for="hour in hours" :key="hour.time_epoch">
            <h2 class="text-2xl text-center mb-2">{{ (extractTime(hour.time)) }}</h2>
            <p class="text-3xl">{{ hour.temp_c }}°</p>
            <p class="text-2xl mb-2">{{ hour.condition.text}}</p>
            <p>Влажность: {{ hour.humidity}}%</p>
            <p>Ветер: {{ hour.wind_kph}}км/ч</p>
            <img class="absolute top-[10px] right-0" :src="hour.condition.icon" alt="Иконка погоды">
        </swiper-slide>
    </swiper>
</template>

