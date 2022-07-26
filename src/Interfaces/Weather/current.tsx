import { ICommonWeatherFeatures } from './commonWeatherFeatures'



export interface ICurrent extends ICommonWeatherFeatures {
    sunrise: number;
    sunset: number;
}