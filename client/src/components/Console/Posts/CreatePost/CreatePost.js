import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../store/actions/posts';

const CreatePost = () => {
    const [postData, setPostData] = useState({
        desc: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData));
        resetForm();
    }

    const resetForm = () => {
        setPostData({
            desc: '' 
        })
    }

    return (
        <div className="container border rounded pt-5 pb-4 bg-light">
            <form onSubmit={handleSubmit}>
                <h4 className="mb-3">CREATE POST:</h4>
                <div className="form-group">
                    <textarea required rows="5" type="text" className="form-control" placeholder="Write something .." value={postData.desc} onChange={ (e) => setPostData({ ...postData, desc: e.target.value }) } />
                </div>
                <button type="submit" className="btn btn-danger">Publish</button>
            </form>
        </div>
    )
}

export default CreatePost;