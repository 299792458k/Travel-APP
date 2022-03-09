import {useSearchParams} from 'react-router-dom'
import Card from './Card'
import { TRIPS, filterByDest } from './CardsAPI'
import './grid.css'
import './Cards.css'
import { useMemo } from 'react'
function Cards() {
    const [searchParams] = useSearchParams()
    const dest = searchParams.get('dest')
    const trips = useMemo(() => {
        if(!dest) return TRIPS
        else return filterByDest(dest)
    }, [dest])
    console.log(trips)
    return (
        <div className='cards-wrap'>
            <div className='grid'>
                <div className='row'>
                    {/* <div className='card-item col l-4 m-6 s-12'>
                        <Card imgSrc='/assets/1.jpg'>Explore the hidden waterfall deep inside the Amazon jungle</Card>
                    </div> */}
                    {trips.map((trip) =>
                        <div key = {trip.id} className='card-item col l-4 m-6 s-12'>
                            <Card imgSrc={trip.src}>{trip.description}</Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cards