import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/login'

import Logo from '../../images/logo.png'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(login(loginData))
    }

    return (
        <div className="container">
            <div className="container bg-light border rounded" style={{maxWidth: "30rem"}}>
                <div className="text-center pt-5 mb-4">
                    <img className="rounded-circle shadow-sm mb-4" src={Logo} alt="" height="100" />
                    <h1 className="h3 mb-3 font-weight-normal">ADMIN CONSOLE</h1>
                    <p>Login only if you are authorized!</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input required type="email" className="form-control" placeholder="Email address" value={loginData.email} onChange={ (e) => setLoginData({ ...loginData, email: e.target.value }) } />
                    </div>
                    <div className="form-group">
                        <input required type="password" className="form-control" placeholder="Password" value={loginData.password} onChange={ (e) => setLoginData({ ...loginData, password: e.target.value }) } />
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="checkBox" />
                        <label className="form-check-label" htmlFor="checkBox">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block">Login</button>
                </form>

                <p className="mt-4 mb-4 text-muted text-center">&copy; 2020 FURIDA</p>
            </div>
        </div>
    )
}

export default Login
