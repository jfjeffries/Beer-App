import React, { Component } from 'react';
import Auth from './authorization/Auth';
import Head from './homepage/Head';
import Homepage from './homepage/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(){
    super();
    this.state = {
      username:"",
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) { 
      this.setState({ sessionToken: token });
    }
}
setSessionState = (token) => {
  localStorage.setItem('token', token);
  this.setState({ sessionToken: token });
}

logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  localStorage.clear();
}

protectedViews = () => {
  if (this.state.sessionToken === localStorage.getItem('token')) {
    return (
      <Switch>
        <Route path='/'>
          <Homepage sessionToken={this.state.sessionToken} />
        </Route>
      </Switch>
    )
  } else {
    return (
      <Route path="/" >
        <Auth setToken={this.setSessionState}/>
      </Route>
    )
  }
}

  render() {
    return (
      <Router>
        <div >
          <Head clickLogout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
