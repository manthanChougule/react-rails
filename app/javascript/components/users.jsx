import React, { Component } from 'react'
import User from './user'
import EditUser from './edit_user'
import { connect } from 'react-redux';


class Users extends Component {
  render() {
    return(
      <div>
        <h1>All User</h1>
        {this.props.users.map((user) => (
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
  console.log("Hello",state)
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)