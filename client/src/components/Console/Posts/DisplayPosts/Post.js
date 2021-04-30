import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePost, deletePost } from '../../../../store/actions/posts';
import moment from 'moment';

const Post = (props) => {
    const [postData, setPostData] = useState(props.post);

    const dispatch = useDispatch();

    const resetForm = () => {
        setPostData(props.post);
    }

    const closeModal = () => {
        window.$('#edit' + props.post._id).modal('hide');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updatePost(props.post._id, postData));
        closeModal();
    }

    return (
        <div className="col-lg-6">
            {/* Post */}
            <div className="card mb-3">
                <img className="card-img-top" src={"http://localhost:8080/uploads/" + props.post.img} alt="Card" />
                <div className="card-body">
                    <p className="card-text">{props.post.desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{moment(props.post.time).fromNow()}</small>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => resetForm()} data-toggle="modal" data-target={"#edit" + props.post._id}>Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target={"#del" + props.post._id}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* EditModal */}
            <div className="modal fade" id={"edit" + props.post._id} tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="editModalLabel">EDIT POST:</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <textarea required rows="5" type="text" className="form-control" placeholder="Write something .." value={postData.desc} onChange={(e) => setPostData({ ...postData, desc: e.target.value })} />
                                </div>
                                <input required type="url" className="form-control" placeholder="https://example.com" value={postData.url} onChange={ (e) => setPostData({ ...postData, url: e.target.value }) } />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary rounded-pill" data-dismiss="modal">Go back</button>
                                <button type="submit" className="btn btn-danger rounded-pill">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* DeleteModal */}
            <div className="modal fade" id={"del" + props.post._id} tabIndex="-1" role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModal">CONFIRMATION</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this post?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary rounded-pill" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-danger rounded-pill" data-dismiss="modal" onClick={() => dispatch(deletePost(props.post._id))}>Yes, Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
