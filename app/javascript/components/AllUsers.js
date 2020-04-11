import React, { Component } from 'react'
import User from './User'
import EditUser from './EditUser'
import { connect } from 'react-redux';


class AllUsers extends Component {
    render() {
        return(
            <div>
                <h1>All User</h1>
                {users.map((user) => (
                    <div key={user.id}>
                        {user.editing ? <EditUser user={user} key={user.id}/> :
                                        <User key={user.id} user={user} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userList.users
    }
}

export default connect()(AllUsers)