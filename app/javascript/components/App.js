import React, { Component } from 'react'
import Home from './home'
import NewUser from './new_user'
import AppBar from '@material-ui/core/AppBar'
import MenuItem from '@material-ui/core/MenuItem'
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Users from './users'
import { Tab } from '@material-ui/core'





class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar>
            <Tab> 
              <Link to="/">Listing</Link>
            </Tab>
            <Tab>
              <Link to="/new_user">NewUser</Link>
            </Tab>  
               
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new_user" component={NewUser} />
          </Switch>
          </ AppBar>
        </div>
      </Router>
    );
  }
}

export default App