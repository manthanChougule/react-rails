import React, { Component } from 'react'
import Home from './Home'
import NewUser from './NewUser'
//import AllUser from './AllUsers'
import User from './User'
import Order from './Order'
import { BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import AllUsers from './AllUsers'


class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Listing</Link>
                    </li>
                    <li>
                        <Link to="/new_user">NewUser</Link>
                    </li>
                    <li>
                        <Link to="/order"> Order </Link>
                    </li> 
                    <li>
                        <Link to="/user"> user </Link>
                    </li>  
                    <li>
                        <Link to="/all_users">AllUser</Link>
                    </li>
                </ul>
                <hr />         
                {/*Welcome !!!!!!!!*/}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new_user" component={NewUser} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="all_users" component={AllUsers} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App