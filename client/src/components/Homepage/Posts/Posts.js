import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

function Posts() {
    const posts = useSelector((state) => state.posts)
    return (
        <div className="bg-light rounded shadow pt-5">
            <h4 className="text-center">UPDATES</h4>
            <div className="container">
                <hr/>
                {
                    !posts.length ? (
                        <div className="text-center my-4">
                            <div className="spinner-border text-muted" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            { posts.map((currentpost) => <Post key={currentpost._id} post={currentpost} />) }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Posts
