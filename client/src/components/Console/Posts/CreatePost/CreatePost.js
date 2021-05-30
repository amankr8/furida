import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../../store/actions/posts'
import placeholder from '../../../../images/placeholder-img.png'

const CreatePost = () => {
    const [postData, setPostData] = useState({
        desc: '',
        url: '',
    })
    const [file, setFile] = useState()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("desc", postData.desc)
        formData.append("url", postData.url)
        formData.append("img", file)
        dispatch(createPost(formData))
        
        e.target.reset()
        resetForm()
    }

    const resetForm = () => {
        setPostData({
            desc: '',
            url: ''
        })
    }

    return (
        <div className="container bg-light rounded pt-5 pb-3 shadow">
            <form onSubmit={handleSubmit}>
                <h4 className="mb-3">CREATE POST:</h4>
                <div className="form-group">
                    <div className="border rounded bg-white">
                        <img src={placeholder} className="card-img" height="200px" style={{objectFit: "Cover"}} alt="placeholder" />
                    </div>
                </div>
                <div className="form-group">
                    <input required type="file" accept=".jpg, .jpeg, .png" className="form-control-file" filename={file} onChange={ (e) => setFile(e.target.files[0]) } />
                </div>
                <div className="form-group">
                    <textarea required rows="4" type="text" className="form-control" placeholder="Write something..." value={postData.desc} onChange={ (e) => setPostData({ ...postData, desc: e.target.value }) } />
                </div>
                <div className="form-group">
                    <input required type="url" className="form-control" placeholder="https://example.com" value={postData.url} onChange={ (e) => setPostData({ ...postData, url: e.target.value }) } />
                </div>
                <button type="submit" className="btn btn-danger">Publish</button>
            </form>
        </div>
    )
}

export default CreatePost