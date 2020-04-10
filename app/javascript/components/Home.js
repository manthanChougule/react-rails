import React, { Component } from 'react'
import NewUser from './NewUser'
import AllUser from './AllUsers'

class Home extends Component {
    render() {
        return (
            <div>
               <AllUser />
            </div>
        );
    }
}

export default Home