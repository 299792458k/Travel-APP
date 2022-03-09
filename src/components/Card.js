import './Card.css'
function Card({ imgSrc, children}) {
    return (
        <>
            <div className="card">
                <img className='card-img' src={imgSrc} alt="" />
                <div className="card-des">{children}</div>
            </div>
            
        </>

    )
}

export default Card