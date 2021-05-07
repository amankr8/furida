import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import Navbar from '../modules/Navbar/Navbar'
import Info from './Info/Info'
import Posts from './Posts/Posts'
import Messages from './Messages/Messages'
import Menu from './Menu/Menu'

function Console() {
    return (
        <div>
            <Navbar item1="Webpage" link1="/" />
                <Switch>
                    <Route exact path="/console" component={Menu} />
                    <div className="container">
                    <Route path="/console/info" component={Info} />
                    <Route path="/console/posts" component={Posts} />
                    <Route path="/console/messages" component={Messages} />
                    </div>
                </Switch>
        </div>
    )
}

export default Console