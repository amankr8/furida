import React from 'react'
import Logo from '../../images/logo.png'

const Login = () => {
    return (
        <div className="container">
            <div className="container bg-light border rounded" style={{maxWidth: "30rem"}}>
                <div className="text-center pt-5 mb-4">
                    <img className="rounded-circle shadow-sm mb-4" src={Logo} alt="" height="100" />
                    <h1 className="h3 mb-3 font-weight-normal">ADMIN CONSOLE</h1>
                    <p>Login only if authorized!</p>
                </div>

                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>

                <p className="mt-4 mb-4 text-muted text-center">&copy; 2020 FURIDA</p>
            </div>
        </div>
    )
}

export default Login
