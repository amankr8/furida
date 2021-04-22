import React from 'react'

function Heading() {
    return (
        <div>
            <div className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-3 text-danger">FURIDA</h1>
                    <p className="lead">Non-Governmental Organisation (NGO) in Jamshedpur</p>
                    <hr className="my-4" />
                    <h4>
                    <button type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#contactModal">CONTACT US</button>
                    </h4>
                </div>
            </div>
            <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModalLabel">CONTACT US</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" className="form-control" placeholder="Message" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading
