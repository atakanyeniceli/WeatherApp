import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { ICurrent } from "../../Interfaces/Weather/current"



const Current = ({ cityName }: { cityName?: string }) => {

    const tempCurrent = useAppSelector((e) => e.weather.current)
    const [current, setCurrent] = useState<ICurrent>()
    const [dateTime, setDateTime] = useState<Date>()

    useEffect(() => {
        setCurrent({ ...tempCurrent })
    }, [tempCurrent])

    useEffect(() => {
        if (current?.dt !== undefined)
            setDateTime(new Date(current.dt * 1000))
    }, [current])

    return (
        <div className='md:px-5 px-2 flex'>
            <div className='w-full text-start flex'>
                <div className='text-6xl align-top mr-1'>{current?.temp.toFixed()}</div>
                <div className='mt-1  text-start align-top '>C°</div>
                <div className=' text-xs md:m-2 mt-2 text-start text-slate-400'>
                    <div>FeelsLike:
                        <span className='mx-1'>{current?.feels_like}C°</span>
                    </div>
                    <div>Humidity:
                        <span className='mx-1'>{current?.humidity}%</span>
                    </div>
                    <div>Wind:
                        <span className='mx-1'>{current?.wind_speed}km/h</span>
                    </div>
                </div>
            </div>
            <div className='w-full align-top text-end'>
                <div className='md:text-3xl text-2xl'>{cityName}</div>
                <div>
                    <span className='mx-2'>{dateTime?.toDateString().slice(0, 3)}</span>
                    <span>{dateTime?.toLocaleTimeString('tr', { timeStyle: 'short' })}</span>
                </div>
                {current?.weather.length && <div className='text-sm text-slate-400'>{current?.weather[0].description}</div>}
            </div>
        </div>
    )
}

export default Current