import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getMessages } from '../../store/actions/messages'

import Navbar from '../modules/Navbar/Navbar'
import Info from './Info/Info'
import Posts from './Posts/Posts'
import Messages from './Messages/Messages'
import Menu from './Menu/Menu'

const Console = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMessages())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/console"><Menu /></Route>
                <React.Fragment>
                    <div className="container">
                        <Route path="/console/info"><Info /></Route>
                        <Route path="/console/posts"><Posts /></Route>
                        <Route path="/console/messages"><Messages /></Route>
                    </div>
                </React.Fragment>
            </Switch>
        </div>
    )
}

export default Console