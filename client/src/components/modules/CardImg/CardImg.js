import React from 'react'

const CardImg = (props) => {
    const url = 'http://localhost:8080/uploads/'

    return (
        <div>
            <img className="card-img-top" src={url + props.img} height="225" style={{ objectFit: "cover" }} alt="Card" />
        </div>
    )
}

export default CardImg
