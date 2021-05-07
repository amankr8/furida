import React from 'react'

const CardImg = (props) => {
    return (
        <div>
            <img className="card-img-top" src={`http://localhost:8080/uploads/${props.img}`} height="225" style={{ objectFit: "cover" }} alt="Card" />
        </div>
    )
}

export default CardImg
