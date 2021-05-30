import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../../store/actions/users'
import { Link } from 'react-router-dom'

const Menu = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div>
            <div className="jumbotron shadow-sm">
                <div className="text-center">
                    <h1 className="display-4">CONSOLE</h1>
                </div>
            </div>
            <div className="container">
                <ul className="list-group shadow-sm">
                    <Link to="/console/info" className="list-group-item btn btn-outline-secondary">
                        <div className="row">
                            <div className="col-1 text-right">
                                <i className="fas fa-info-circle"></i>
                            </div>
                            <div className="col text-left">
                                Info
                            </div>
                        </div>
                    </Link>
                    <Link to="/console/posts" className="list-group-item btn btn-outline-secondary">
                        <div className="row">
                            <div className="col-1 text-right">
                                <i className="far fa-newspaper"></i>
                            </div>
                            <div className="col text-left">
                                Posts
                            </div>
                        </div>
                    </Link>
                    <Link to="/console/messages" className="list-group-item btn btn-outline-secondary">
                        <div className="row">
                            <div className="col-1 text-right">
                                <i className="fas fa-inbox"></i>
                            </div>
                            <div className="col text-left">
                                Messages
                            </div>
                        </div>
                    </Link>
                </ul>
                <div className="mt-4 text-center">
                    <button type="button" className="btn btn-danger shadow-sm" onClick={() => dispatch(logout(history))}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Menu
