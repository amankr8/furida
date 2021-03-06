import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../../../store/actions/messages'
import moment from 'moment'

const Message = (props) => {
    const dispatch = useDispatch()

    return (
        <li className="list-group-item">
            {/* Message */}
            <div>
                <p className="mb-0"><strong>SUBJECT: </strong>{props.msg.subject}</p>
                <p className="text-muted">- {props.msg.name}<i> ({props.msg.email})</i></p>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{moment(props.msg.date).fromNow()}</small>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={"#view" + props.msg._id}>
                        <i className="fas fa-eye fa-lg"></i>
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={"#del" + props.msg._id}>
                            <i className="fas fa-trash fa-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* MessageModal */}
            <div className="modal fade" id={"view" + props.msg._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">MESSAGE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.msg.message}
                        </div>
                        <div className="modal-footer">
                            <a href={"mailto:" + props.msg.email} className="btn btn-danger btn-block">Respond</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* DeleteModal */}
            <div className="modal fade" id={"del" + props.msg._id} tabIndex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="messageModalLabel">CONFIRMATION</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this message?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => dispatch(deleteMessage(props.msg._id))}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Message