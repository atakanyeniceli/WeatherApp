export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}


export interface ICommonWeatherFeatures {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<IWeather>;
}