import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../Interfaces/Weather/commonWeatherFeatures";
import { IDaily } from "../Interfaces/Weather/daily";
import { IHourly } from "../Interfaces/Weather/hourly";
import { IAction } from "../Interfaces/weatherSlice/actions";
import { IinitialState } from "../Interfaces/weatherSlice/initialState";
import { fetchWeather } from "./fetchWeather";





const initialState: IinitialState = {
    current: {
        feels_like: 0,
        dew_point: 0,
        humidity: 0,
        pressure: 0,
        sunrise: 0,
        sunset: 0,
        clouds: 0,
        temp: 0,
        uvi: 0,
        dt: 0,
        visibility: 0,
        wind_deg: 0,
        wind_speed: 0,
        weather: Array<IWeather>(),

    },
    daily: Array<IDaily>(),
    hourly: Array<IHourly>()
}


export const weatherSlice = createSlice(
    {
        name: 'weather',
        initialState,
        reducers: {
        },
        extraReducers: (builder) => {
            builder.addCase(fetchWeather.pending, (state, action) => {
                console.log('Weather Fetch Pending')
            })
            builder.addCase(fetchWeather.fulfilled, (state, action: PayloadAction<IAction>) => {
                state.current = { ...action.payload.current }
                state.hourly = [...action.payload.hourly]
                state.daily = [...action.payload.daily]
            })
            builder.addCase(fetchWeather.rejected, (state, action) => {
                console.log('rejected', action.payload)
            })
        }
    }
)