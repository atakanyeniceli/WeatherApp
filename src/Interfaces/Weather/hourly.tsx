import { ICommonWeatherFeatures } from "./commonWeatherFeatures";



export interface IHourly extends ICommonWeatherFeatures {
    pop: number;
}