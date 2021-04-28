import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../store/actions/messages';

const Heading = () => {
    const [postData, setPostData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const dispatch = useDispatch();

    const resetForm = () => {
        setPostData({
            name: '',
            email: '',
            subject: '',
            message: '' 
        })
    }

    const closeModal = () => {
        window.$('#contactModal').modal('hide');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(sendMessage(postData));
        closeModal();
    }

    return (
        <div>
            <div className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-3 text-danger">FURIDA</h1>
                    <p className="lead">Non-Governmental Organisation (NGO) in Jamshedpur</p>
                    <hr className="my-4" />
                    <h4>
                    <button type="button" className="btn btn-danger btn-lg rounded-pill" onClick={() => resetForm()} data-toggle="modal" data-target="#contactModal">CONTACT US</button>
                    </h4>
                </div>
            </div>

            {/* ContactModal */}
            <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="contactModalLabel">CONTACT US</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" value={postData.name} onChange={ (e) => setPostData({ ...postData, name: e.target.value }) } />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" value={postData.email} onChange={ (e) => setPostData({ ...postData, email: e.target.value }) } />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" value={postData.subject} onChange={ (e) => setPostData({ ...postData, subject: e.target.value }) } />
                                </div>
                                <textarea rows="5" className="form-control" placeholder="Message" value={postData.message} onChange={ (e) => setPostData({ ...postData, message: e.target.value }) } />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary rounded-pill" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-danger rounded-pill">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
