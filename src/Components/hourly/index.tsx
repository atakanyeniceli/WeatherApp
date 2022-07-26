import { useState } from "react"
import { useAppSelector } from "../../app/hooks"
import Chart from "../chart"

type TChoose = 'temp' | 'humidity' | 'pressure'

const Hourly = () => {

    const [choose, setChoose] = useState<TChoose>('temp')
    const _hourly = useAppSelector((e) => e.weather.hourly.filter((hour, index) => index % 4 === 0))
    const chooseData = (): Array<number> => {
        let tempData = Array<number>()
        switch (choose) {
            case "temp":
                tempData = [..._hourly.map((hour) => Number(hour.temp.toFixed()))]
                break;
            case 'humidity':
                tempData = [..._hourly.map((hour) => Number(hour.humidity.toFixed()))]
                break;
            case 'pressure':
                tempData = [..._hourly.map((hour) => Number((hour.pressure / 10).toFixed()))]
                break;
            default:
                break;
        }
        return tempData
    }

    return (
        <div className='w-full h-2/5 md:h-1/2 px-2 mb-10 text-[#ffffffcc]'>
            <div>
                <span className={`${choose === 'temp' ? 'underline decoration-blue-700' : null}`}
                    onClick={() => setChoose('temp')}>
                    Temperature
                    <span className='text-[10px]'> C°</span>
                </span>

                <span className={`${choose === "humidity" ? 'underline decoration-blue-700' : null} mx-5`}
                    onClick={() => setChoose('humidity')}>
                    Humidity
                    <span className='text-[10px]'> %</span>
                </span>

                <span className={`${choose === 'pressure' ? 'underline decoration-blue-700' : null}`}
                    onClick={() => setChoose('pressure')}>
                    Pressure
                    <span className='text-[10px]'> X10bar</span>
                </span>
            </div>
            <div className='h-full overflow-x-auto my-5'>
                <Chart data={chooseData()}
                    date={_hourly.map((i) => new Date(i.dt * 1000))}
                    bgColor={'#000026'}
                    textColor={'#ffffffcc'}
                />
            </div>
        </div>
    )
}

export default Hourly

