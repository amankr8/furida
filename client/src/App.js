import React, { useEffect } from 'react'
import './App.css'

import { useDispatch } from 'react-redux'
import { BrowserRouter as Switch, Route } from "react-router-dom"
import { getPosts } from './store/actions/posts'
import { getMessages } from './store/actions/messages'

import Homepage from './components/Homepage/Homepage'
import Console from './components/Console/Console'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPosts())
    dispatch(getMessages())
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/console" component={Console} />
    </Switch>
  )
}

export default App