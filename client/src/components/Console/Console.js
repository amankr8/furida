import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from '../modules/Navbar/Navbar'
import Info from './Info/Info'
import Posts from './Posts/Posts'
import Messages from './Messages/Messages'
import Menu from './Menu/Menu'

const Console = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/console" component={Menu} />
                    <React.Fragment>
                        <div className="container">
                            <Route path="/console/info" component={Info} />
                            <Route path="/console/posts" component={Posts} />
                            <Route path="/console/messages" component={Messages} />
                        </div>
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Console