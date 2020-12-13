import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import './global-css.css'

import Home from './Containers/Home'
import About from './Containers/About'
import Honors from './Containers/Honors'
import Education from './Containers/Education'
import NavBar from './Components/NavBar'

class App extends Component {

  renderHome = () => <Home />
  renderAbout = () => <About />
  renderHonors = () => <Honors />
  renderEducation = () => <Education />

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={this.renderHome} />
          <Route path='/about' exact component={this.renderAbout} />
          <Route path='/honors' exact component={this.renderHonors} />
          <Route path='/education' exact component={this.renderEducation} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);