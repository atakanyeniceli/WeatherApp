

interface IProps {
    day: Date,
    img: string,
    maxTemp: number,
    minTemp: number

}

const DailyCard = ({ day, img, maxTemp, minTemp }: IProps) => {

    return (
        <div className='my-2 w-full mx-1'>
            <div > {day.toDateString().slice(0, 3)}</div >
            <div><img className=' mx-auto' src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Loading..." /></div>
            <div className='text-sm'>
                <span className='mx-2'>{maxTemp.toFixed()}°</span>
                <span>{minTemp.toFixed()}°</span>
            </div>
        </div >
    )
}

export default DailyCard