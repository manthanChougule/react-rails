import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        axios
          .get('/api/users')
          .then(responce => {
              this.setState({ users: responce.data.users });
          })
    }

    renderAllUsers = () => {
        return(
            <ul>
                {this.state.users.map(post => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div>
                {this.renderAllUsers()}
            </div>
        );
    }
}

export default Users