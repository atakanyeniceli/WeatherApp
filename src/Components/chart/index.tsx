type TColor = `#${string}`

interface IProps {
    data: Array<number>
    date: Array<Date>
    bgColor: TColor
    textColor: TColor
}


const Chart = ({ data, date, bgColor, textColor }: IProps) => {

    const dataMax = Math.max(...data)
    const dx = (dataMax * 5) / (data.length - 1);
    const d = ` M0,${data[0]} ${data.slice(1).map((p, i) => (
        `C${dx * i + dx / 2},${data[i]} ` +
        `${dx * (i + 1) - dx / 2},${data[i + 1]} ` +
        `${dx * (i + 1)},${data[i + 1]} `
    ))}`;


    return (
        <svg className='w-[300%] xl:w-full h-full'  preserveAspectRatio="xMinYMin" viewBox={`0 -${dataMax + 5} ${dataMax * 5} 1`}>
            {data.map((_data, index) => {
                return (
                    <text key={_data * index} x={(index * dx) > dataMax * 4.95 ? (dataMax * 4.88) : index * dx} y={`-${_data + 1}`} fill={textColor} className='text-[3px]'>
                        <tspan dx={0} dy={0}>{_data}</tspan>
                        <tspan dx={-4} dy={`${_data - 1}`}>{date[index].toLocaleTimeString('tr', { timeStyle: 'short' })}</tspan>
                    </text>
                )
            })}
            <path className='-scale-y-100' d={`${d} V0 H0 Z`} fill={`url(#gradient)`} />
            <defs>
                <linearGradient id={`gradient`} x1='0' x2='0' y1='0' y2='1'>
                    <stop offset='0%' stopColor={bgColor} stopOpacity={0.1} />
                    <stop offset='100%' stopColor={bgColor} stopOpacity={0.5} />
                </linearGradient>
            </defs >
        </svg >
    );
}

export default Chart