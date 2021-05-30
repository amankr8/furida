import React, { useState, useEffect } from 'react'
import './App.css'

import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { getPosts } from './store/actions/posts'
import { getMessages } from './store/actions/messages'

import Homepage from './components/Homepage/Homepage'
import Console from './components/Console/Console'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'

const App = () => {
    const [user, setUser] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        setUser(localStorage.getItem('user'))
        dispatch(getPosts())
        dispatch(getMessages())
    }, [dispatch])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                {
                    user ? (
                        <Switch>
                            <Route path="/console"><Console /></Route>
                            <Route path="/login"><Redirect to="/console" /></Route>
                        </Switch>
                    ) : (
                        <Route path="/login"><Login /></Route>
                    )
                }
                <Route><NotFound /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App