export interface ICurrentWeather {
    temp_c: number
    feelslike_c: number
    humidity: number
    wind_kph: number
    condition: ICurrentCondition
}

export interface ICurrentCondition {
    text: string
    icon: string
}

export interface ILocationWeather {
    name: string
    country: string
    localtime: string
}

export interface IForecastHour {
    time: string
    temp_c: number
    condition: ICurrentCondition
    humidity: number
    wind_kph: number
}

export interface IForecastDay {
    hour: IForecastHour[]
}

export interface IForecastWeather {
    forecastday: IForecastDay[]
}

export interface IWeather {
    current?: ICurrentWeather
    location?: ILocationWeather
    forecast?: IForecastWeather
}