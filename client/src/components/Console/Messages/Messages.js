import React from 'react'
import { useSelector } from 'react-redux'
import ArrowLeft from '../../modules/ArrowLeft'
import Message from './Message'

const Messages = () => {
    const messages = useSelector((state) => state.messages)
    return (
        <div>
            <ArrowLeft />
            <div className="container border rounded mt-4 pt-5 pb-3 bg-light">
                <h4 className="text-center mb-3">INBOX</h4>
                {
                    !messages.length ? (
                        <div className="text-center">
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
