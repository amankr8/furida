import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../store/actions/messages'

const Heading = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const dispatch = useDispatch()

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '' 
        })
    }

    const closeModal = () => {
        window.$('#contactModal').modal('hide')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(sendMessage(formData))
        closeModal()
    }

    return (
        <div>
            <div className="jumbotron shadow-sm">
                <div className="container text-center">
                    <h1 className="display-3 text-danger">FURIDA</h1>
                    <p className="lead">Non-Governmental Organisation (NGO) in Jamshedpur</p>
                    <hr className="my-4" />
                    <h4>
                    <button type="button" className="btn btn-danger btn-lg shadow" onClick={() => resetForm()} data-toggle="modal" data-target="#contactModal">CONTACT US</button>
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
                                    <input required type="text" className="form-control" placeholder="Name" value={formData.name} onChange={ (e) => setFormData({ ...formData, name: e.target.value }) } />
                                </div>
                                <div className="form-group">
                                    <input required type="email" className="form-control" placeholder="Email" value={formData.email} onChange={ (e) => setFormData({ ...formData, email: e.target.value }) } />
                                </div>
                                <div className="form-group">
                                    <input required type="text" className="form-control" placeholder="Subject" value={formData.subject} onChange={ (e) => setFormData({ ...formData, subject: e.target.value }) } />
                                </div>
                                    <textarea required rows="5" className="form-control" placeholder="Message" value={formData.message} onChange={ (e) => setFormData({ ...formData, message: e.target.value }) } />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-danger btn-block">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
