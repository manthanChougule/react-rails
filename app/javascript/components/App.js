import React, { Component } from 'react'
import Home from './Home'
import NewUser from './NewUser'
import Users from './Users'
import Order from './Order'
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/new_user">NewUser</Link>
                    </li>
                    <li>
                        <Link to="/order"> Order </Link>
                    </li> 
                    <li>
                        <Link to="/users"> Users </Link>
                    </li>  
                </ul>
                <hr />         
                {/*Welcome !!!!!!!!*/}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new_user" component={NewUser} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/users" component={Users} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App