import React, { useState, useEffect } from 'react'
import './App.css'

import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { getPosts } from './store/actions/posts'
import { getMessages } from './store/actions/messages'

import Homepage from './components/Homepage/Homepage'
import Console from './components/Console/Console'
import Login from './components/Login/Login'

const App = () => {
    const [user, setUser] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getMessages())
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                {
                    user && (
                        <div>
                            <Route path="/console" component={Console} />
                        </div>
                    )
                }
            </Switch>
        </BrowserRouter>
    )
}

export default App