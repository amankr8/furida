import React from 'react'

const Post = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card mb-4 border-0 shadow-sm">
                <img className="card-img-top" src="https://picsum.photos/480/360" alt="Card" />
                <div className="card-body">
                    <p className="card-text">{props.post.desc}</p>
                    <a href="/" className="btn btn-danger">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Post
