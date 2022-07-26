import { ICurrent } from "../Weather/current";
import { IDaily } from "../Weather/daily";
import { IHourly } from "../Weather/hourly";



export interface IAction {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: ICurrent,
    daily: Array<IDaily>,
    hourly: Array<IHourly>
}