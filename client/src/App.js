import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/landingpage'
import Dashboard from './components/pages/dashboard'

export default () => {

  return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
  )
}
