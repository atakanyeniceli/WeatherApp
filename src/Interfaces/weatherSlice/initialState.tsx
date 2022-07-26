import { ICurrent } from "../Weather/current";
import { IDaily } from "../Weather/daily";
import { IHourly } from "../Weather/hourly";

export interface IinitialState {
    current: ICurrent,
    hourly: Array<IHourly>,
    daily: Array<IDaily>
}