import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchWeather = createAsyncThunk('fetchWeather', async ({ _lat, _lon }: { _lat: string, _lon: string }) => {

    return await axios.get(`${process.env.REACT_APP_WEATHER_API}`, {
        params: {
            lat: _lat,
            lon: _lon,
            exclude: 'minutely',
            apikey: process.env.REACT_APP_WEATHER_API_KEY,
            units: 'metric'
        }
    })
        .then((res) => res.data)

})