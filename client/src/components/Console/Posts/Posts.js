import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import DisplayPosts from './DisplayPosts/DisplayPosts'
import ArrowLeft from '../../modules/ArrowLeft/ArrowLeft'

const Posts = () => {
    return (
        <div>
            <ArrowLeft />
            <div className="row">
                <div className="col-lg-4 col-md-6 mt-4 mb-4">
                    <CreatePost />
                </div>
                <div className="col-lg-8 col-md-6 mt-4 mb-4">
                    <DisplayPosts />
                </div>
            </div>
        </div>
    )
}

export default Posts
