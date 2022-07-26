import { useState } from "react"
import { Link } from "react-router-dom"
import cities from "../../Components/cities"


const Home = () => {

    const [search, setSearch] = useState('')

    const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let tempValue = e.target.value

        if (tempValue.length > 1)
            tempValue = tempValue[0].toUpperCase() + tempValue.slice(1)

        setSearch(tempValue)
    }

    return (
        <div className='text-center'>
            <div><span className='text-4xl'>Turkey Cities Weather</span></div>
            <div className='my-5'><input className='bg-transparent outline-none border border-white rounded-md px-2 py-1' type="text" placeholder='Search' value={search} onChange={searchOnChange} /></div>
            <div className='grid grid-cols-2 md:grid-cols-3 md:mx-[15%]'>
                {
                    cities.filter((cityFilter) => cityFilter.name.includes(search)).map((city) => {
                        return (
                            <div key={city.id} className='m-2'>
                                <Link to={`/city/${city.name}`}>
                                    <div className='p-2 border border-violet-700 border-opacity-50 rounded-xl flex hover:bg-violet-700 hover:bg-opacity-10 ease-linear duration-300'>
                                        <div className='bg-violet-700 bg-opacity-60 h-7 w-7 rounded-full '>
                                            <span className='align-middle text-xs'>
                                                {city.id}
                                            </span>
                                        </div>
                                        <div className='w-full truncate mx-1'>{city.name}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home