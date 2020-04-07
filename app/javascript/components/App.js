import React, { Component } from 'react'
import Home from './Home'
import NewUser from './NewUser'
import Users from './Users'
import Order from './Order'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                {/*Welcome !!!!!!!!*/}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new_user" component={NewUser} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/users" component={Users} />
                </Switch>
            </div>
        );
    }
}

export default App