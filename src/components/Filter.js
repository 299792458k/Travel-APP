import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dests } from './CardsAPI'

import './Filter.css'
function Filter() {
    const [active, setActive] = useState('all')
    const handleOnclick = (prop) => {
        setActive(prop.toLowerCase())
    }
    return (
        <div className='cards-filter'>
            <h2 style={{ marginRight: '16px' }}>Where do you go</h2>
            <button className='filter-item' onClick={() => handleOnclick('all')}>
                <Link to='./' className={active==='all' ? 'active' : undefined}>All</Link>
            </button>
            {dests.map(dest =>
                <button key={dest} className='filter-item' onClick={() => handleOnclick(dest)}>
                    <Link to={`?dest=${dest}`} className={dest.toLowerCase() ===active ? 'active' : undefined}>{dest}</Link>
                </button>
            )}
        </div>
    )
}

export default Filter