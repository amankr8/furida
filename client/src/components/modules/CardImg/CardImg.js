import React from 'react'

const CardImg = (props) => {
    // const url = 'https://furida.s3.amazonaws.com/posts/'
    const url = 'http://localhost:8080/uploads/posts/'

    return (
        <div>
            <img className="card-img-top" src={url + props.img} height="225" style={{ objectFit: "cover" }} alt="Card" />
        </div>
    )
}

export default CardImg
