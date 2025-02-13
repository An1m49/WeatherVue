<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import WeatherSearch from "@/components/weather/WeatherSearch.vue";
import { useApi } from "@/composable/useApi.ts";
import WeatherCountryInfo from "@/components/weather/WeatherCountryInfo.vue";
import WeatherStatus from "@/components/weather/WeatherStatus.vue";
import WeatherHumidity from "@/components/weather/WeatherHumidity.vue";
import WeatherWind from "@/components/weather/WeatherWind.vue";
import WeatherCards from "@/components/weather/WeatherCards.vue";

const { currentWeather, fetchWeather } = useApi();
//Переменные
const searchValue = ref<string>('Москва');

//Хуки
watch(searchValue, async(value) => {
    await fetchWeather(value);
})

onMounted(async() => await fetchWeather())

</script>

<template>
    <div class="font-play text-[#494949] text-xl">
        <div class="container mx-auto px-2">
            <div class="min-h-screen flex items-center justify-center">
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

                    <WeatherStatus
                        :degrees="currentWeather.current?.temp_c"
                        :feelslike="currentWeather.current?.feelslike_c"
                        :condition="currentWeather.current?.condition.text"
                        :icon="currentWeather.current?.condition.icon"
                    />

                    <WeatherHumidity
                        :humidity="currentWeather.current?.humidity"
                    />

                    <WeatherWind
                        class="mb-4"
                        :wind="currentWeather.current?.wind_kph"
                    />

                    <div class="">
                        <WeatherCards :hours="currentWeather.forecast?.forecastday[0]?.hour"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
