import { ref } from 'vue';
import axios from 'axios';
import type { IWeather } from "@/types";

export const useApi = () => {
    const url: string = 'http://api.weatherapi.com/v1';
    const apiKey: string = '13fd18b13a514c4186442258251102';

    const currentWeather = ref<IWeather>({});

    const fetchWeather = async(city: string='Москва') => {
        try {
            const { data } = await axios.get(`${url}/forecast.json`, {
                params: {
                    key: apiKey,
                    q: city,
                    lang: 'ru'
                }
            });
            currentWeather.value = data;
            console.log(currentWeather.value);
        }
        catch (error) {
            console.error(error);
        }

    }

    return {
        url,
        apiKey,
        currentWeather,
        fetchWeather
    }
}