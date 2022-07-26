import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import cities from "../../Components/cities"
import Current from "../../Components/current"
import Daily from "../../Components/daily"
import Hourly from "../../Components/hourly"
import { fetchWeather } from '../../features/fetchWeather'


const City = () => {
    const { cityName } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const tempCity = cities.filter((city) => city.name === cityName)[0]
        const tempLatLon = { _lat: tempCity.latitude, _lon: tempCity.longitude }
        dispatch(fetchWeather({ ...tempLatLon }))
    }, [cityName, dispatch])

    return (
        <div className='h-full'>
            <Current cityName={cityName} />
            <Hourly />
            <Daily />
        </div>
    )
}

export default City