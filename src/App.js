import React, { Component } from 'react';
import './App.css';
import Index from './Components/Index/Index'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/bitly/' component={Index}/>
          <Route exact path='/bitly/admin' component={Index}/>
          <Route path='/bitly/adg45' component={() => window.location = 'http://nick.walla.co.il/?w=//2788103'}/>
        </Switch>
      </div>
    );
  }
}

export default App;
