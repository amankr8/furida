import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import DisplayPosts from './DisplayPosts/DisplayPosts'
import ArrowLeft from '../../modules/ArrowLeft'

function Posts() {
    return (
        <div>
            <ArrowLeft />
            <div className="row">
                <div className="col-md mt-4">
                    <CreatePost />
                </div>
                <div className="col-md mt-4 mb-4">
                    <DisplayPosts />
                </div>
            </div>
        </div>
    )
}

export default Posts
