import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
//import Container from '@material-ui/core/Container'


class User extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.user.firstname}</h2>
                <h2>{this.props.user.lastname}</h2>
                <h2>{this.props.user.email}</h2>
                <h2>{this.props.user.birthdate}</h2>
                <h2>{this.props.user.contact}</h2>
                <h2>{this.props.user.address}</h2>
                <Button variant="contained" color="primary" startIcon={<EditIcon />}
                 onClick={() => this.props.dispatch({type: 'EDIT_USER', id:this.props.user.id})}> 
                Edit </Button>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}
                onClick={() => this.props.dispatch({type: 'DELETE_USER', id:this.props.user.id})}>
                Delete</Button>
            </div>
        );
    }
}

export default connect()(User)