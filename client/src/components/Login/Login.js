import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/users'
import { useHistory } from 'react-router-dom'

import Logo from '../../images/logo.png'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(login(formData, history))
        resetForm()
    }

    const resetForm = () => {
        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <div className="container">
                <div className="container bg-light border rounded shadow" style={{maxWidth: "30rem"}}>
                    <div className="text-center pt-5 mb-2">
                        <img className="rounded-circle shadow-sm mb-3" src={Logo} alt="" height="100" />
                        <h4 className="">FURIDA Jamshedpur</h4>
                        <p>Login to furida.org</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input required type="email" className="form-control" placeholder="Email address" value={formData.email} onChange={ (e) => setFormData({ ...formData, email: e.target.value }) } />
                        </div>
                        <div className="form-group">
                            <input required type="password" className="form-control" placeholder="Password" value={formData.password} onChange={ (e) => setFormData({ ...formData, password: e.target.value }) } />
                            <p className="mt-2 mr-2 text-right"><a href="/password" className="text-secondary"><small>Forgot Password?</small></a></p>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Login</button>
                    </form>

                    <p className="mt-4 mb-4 text-muted text-center">&copy; 2020 FURIDA</p>
                </div>
            </div>
        </div>
    )
}

export default Login
