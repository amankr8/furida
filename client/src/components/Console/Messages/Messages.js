import React from 'react'
import { useSelector } from 'react-redux'
import ArrowLeft from '../../modules/ArrowLeft'

const Message = (props) => {
    return (
        <li className="list-group-item">
            <p className="pt-3">{props.msg.subject}</p>
            <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">18 Apr, 2021</small>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target={"#view" + props.msg._id}>View</button>
                    <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target={"#del" + props.msg._id}>Delete</button>
                </div>
            </div>
        </li>
    )
}

const Messages = () => {
    const messages = useSelector((state) => state.messages)
    return (
        <div>
            <ArrowLeft />
            <div className="container border rounded mt-4 pt-5 pb-3 bg-light">
                <h4 className="text-center mb-3">INBOX</h4>
                {
                    !messages.length ? (
                        <div className="text-center my-4">
                            <div className="spinner-border text-muted" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <ul className="list-group">
                            { messages.map((currentmsg) => <Message key={currentmsg._id} msg={currentmsg} />) }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Messages
