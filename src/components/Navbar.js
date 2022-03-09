import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
function Navbar() {
    const [login, setLogin] = useState(true)
    const [bars, setBars] = useState(false)
    const handleResize = () => {
        if (window.innerWidth <= 968) setLogin(false)
        else setLogin(true)
    }
    const handleOnclick = () => {
        setBars(!bars)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })
    return (
        <>
            <div className='navbar'>
                <span className='navbar-logo'>
                    <Link to='/'>
                        Tr
                        <i class="fa-solid fa-motorcycle"></i>vel
                    </Link>
                </span>
                <span className='navbar-bars' onClick={handleOnclick}><i class="fa-solid fa-bars"></i></span>
                {bars &&
                    <div className='navbar-mobile'>
                        <div className='navbar-mobile-item'>Home</div>
                        <div className='navbar-mobile-item'>Services</div>
                        <div className='navbar-mobile-item'>Products</div>
                    </div>
                }
                <div className='navbar-right'>
                    <ul className='navbar-links'>
                        <li className='navbar-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to='services'>Services</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to='products'>Products</Link>
                        </li>
                    </ul>
                    {login &&
                        <Link to='login'>
                            <Button buttonSize='medium' buttonStyle='outline'>
                                <span style={{ position: 'relative', top: '-6px', fontSize: '22px' }}>Log in</span>
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </>

    )
}

export default Navbar