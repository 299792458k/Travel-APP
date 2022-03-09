import './Herosection.css'
import Button from './Button'
import { useRef, useState } from 'react'
function Herosection() {
    const [active, setActive] = useState(2)
    const heroRef = useRef()
    const handleOnclick1 = () => {
        setActive(1)
        window.scroll(heroRef.current.getBoundingClientRect().x, 
        (heroRef.current.getBoundingClientRect().y+ heroRef.current.getBoundingClientRect().height))
        // console.log(heroRef.current.getBoundingClientRect().height)
    }

    const handleOnclick2 = () => {
        setActive(2)
    }
    return (
        <div className='hero-wrap2' ref={heroRef}>
            <video className='heroVid' src="/assets/Hero.mp4" autoPlay loop muted></video>
            <div className="heroSection">
                <div className='hero-wrap'>
                    <h1 style={{ margin: '0px', fontSize: '48px' }}>ADVENTURE WAITS</h1>
                    <h2>What are you waiting for?</h2>
                    <div className='hero-btns'>
                        <Button onClick={handleOnclick1} buttonSize={'large'} buttonStyle={active===1 ? 'primary' : 'outline'}>GET STARTED</Button>
                        <Button onClick={handleOnclick2} buttonSize={'large'} buttonStyle={active===2 ? 'primary' : 'outline'}>
                            WATCH TRAILER {" "}
                            <i class="fa-solid fa-circle-play"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
