import React from 'react'
import moment from 'moment'

const Post = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm mb-4">
                <img className="card-img-top" src={props.post.img} height="250px" style={{objectFit: "Cover"}} alt="Card" />
                <div className="card-body">
                    <p className="card-text">{props.post.desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{moment(props.post.time).fromNow()}</small>
                        <a href={props.post.url} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
