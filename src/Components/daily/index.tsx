import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { IDaily } from "../../Interfaces/Weather/daily"
import DailyCard from "./dailyCard"


const Daily = () => {

    const tempDaily = useAppSelector((e) => e.weather.daily)
    const [daily, setDaily] = useState<Array<IDaily>>()

    useEffect(() => {

        if (tempDaily.length > 0)
            setDaily([...tempDaily])
    }, [tempDaily])


    return (
        <div id='daily' className='flex overflow-x-auto text-[#ffffffcc]'>
            {
                daily?.map((day) => {
                    return (
                        <DailyCard
                            key={day.dt}
                            day={new Date(day.dt * 1000)}
                            img={day.weather[0].icon}
                            maxTemp={day.temp.max}
                            minTemp={day.temp.min}
                        />
                    )
                })
            }
        </div>
    )
}

export default Daily