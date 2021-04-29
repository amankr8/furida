import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../store/actions/posts';

const CreatePost = () => {
    const [postData, setPostData] = useState({
        desc: '',
        url: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData));
        resetForm();
    }

    const resetForm = () => {
        setPostData({
            desc: '',
            url: ''
        })
    }

    return (
        <div className="container border rounded pt-5 pb-3 bg-light">
            <form onSubmit={handleSubmit}>
                <h4 className="mb-3">CREATE POST:</h4>
                <div className="form-group">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" value={postData.img} onChange={ (e) => setPostData({ ...postData, img: e.target.value }) } />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                </div>
                <div className="form-group">
                    <textarea required rows="5" type="text" className="form-control" placeholder="Write something..." value={postData.desc} onChange={ (e) => setPostData({ ...postData, desc: e.target.value }) } />
                </div>
                <div className="form-group">
                    <input required type="url" className="form-control" placeholder="https://example.com" value={postData.url} onChange={ (e) => setPostData({ ...postData, url: e.target.value }) } />
                </div>
                <button type="submit" className="btn btn-danger">Publish</button>
            </form>
        </div>
    )
}

export default CreatePost;