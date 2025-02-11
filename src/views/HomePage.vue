<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import WeatherSearch from "@/components/weather/WeatherSearch.vue";
import { useApi } from "@/composable/useApi.ts";
import WeatherCountryInfo from "@/components/weather/WeatherCountryInfo.vue";
import WeatherStatus from "@/components/weather/WeatherStatus.vue";

const { currentWeather, fetchWeather } = useApi();
//Переменные
const searchValue = ref<string>('Москва');

//Функции


//Хуки
watch(searchValue, async(value) => {
    await fetchWeather(value);
})

onMounted(async() => await fetchWeather())
</script>

<template>
    <div class="weather pt-[100px] font-play text-[#494949] text-xl">
        <div class="container mx-auto px-2">
            <div class="w-[500px] py-[15px] px-[10px] bg-white">
                <WeatherSearch
                    class="mb-4"
                    v-model:search="searchValue"
                />

                <WeatherCountryInfo
                    class="mb-4"
                    :city="currentWeather.location?.name"
                    :country="currentWeather.location?.country"
                    :local-time="currentWeather.location?.localtime"
                />
                <div class="">
                    <p>H 92° / L 70°</p>
                </div>

                <WeatherStatus
                    :degrees="currentWeather.current?.temp_c"
                    :condition="currentWeather.current?.condition.text"
                    :icon="currentWeather.current?.condition.icon"
                />

                <div class="">
                    <p>Влажность 65%</p>
                </div>

                <div class="">
                    <p>Ветер 15 км/ч</p>
                </div>
            </div>
        </div>
    </div>
</template>
