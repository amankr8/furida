import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

const DisplayPosts = () => {
    const posts = useSelector((state) => state.posts)
    return (
        <div className="container bg-light rounded pt-5 shadow">
            <h4 className="text-center">YOUR POSTS</h4>
            <hr/>
            {
                !posts.length ? (
                    <div className="text-center pb-3">
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
    ) 
}

export default DisplayPosts