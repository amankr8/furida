import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../store/actions/posts';

const CreatePost = () => {
    const [postData, setPostData] = useState({
        desc: 'test',
        url: 'https://test.com',
    })
    const [file, setFile] = useState({
        img: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("desc", postData.desc);
        formData.append("url", postData.url);
        formData.append("img", file.img);
        dispatch(createPost(formData));
        resetForm();
    }

    const resetForm = () => {
        setPostData({
            desc: '',
            url: '',
        })
        setFile({
            img: ''
        })
        console.log(file.img);
    }

    return (
        <div className="container border rounded pt-5 pb-3 bg-light">
            <form onSubmit={handleSubmit}>
                <h4 className="mb-3">CREATE POST:</h4>
                <div className="form-group">
                    <input required type="file" accept=".jpg, .jpeg, .png" className="form-control-file" id="file" filename={file.img} onChange={ (e) => setFile({ img: e.target.files[0] }) } />
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