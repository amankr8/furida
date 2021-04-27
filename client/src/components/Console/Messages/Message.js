import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../../../store/actions/messages';

const Message = (props) => {
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            {/* Message */}
            <div>
                <p className="pt-2">{props.msg.subject}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">18 Apr, 2021</small>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target={"#view" + props.msg._id}>View</button>
                        <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="modal" data-target={"#del" + props.msg._id}>Delete</button>
                    </div>
                </div>
            </div>

            {/* MessageModal */}
            <div class="modal fade" id={"view" + props.msg._id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">MESSAGE</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {props.msg.message}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <a href={"mailto:" + props.msg.email} class="btn btn-danger">Respond</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* DeleteModal */}
            <div class="modal fade" id={"del" + props.msg._id} tabindex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="messageModalLabel">CONFIRMATION</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this message?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => dispatch(deleteMessage(props.msg._id))}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Message