import React from 'react'

const Cover = () => {
    // const url = 'https://furida.s3.amazonaws.com/info/'
    const url = 'http://localhost:8080/uploads/info/'

    return (
        <div>
            <img src={url + 'furida_cover.png'} className="img-fluid rounded shadow" width="100%" alt="Cover" />
        </div>
    )
}

export default Cover
