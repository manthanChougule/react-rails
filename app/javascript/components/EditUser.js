import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class EditUser extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstName = this.getFirstName.value;
        const newLastName = this.getLastName.value;
        const newEmail = this.getEmail.value;
        const newBirthdate = this.getBirthdate.value; 
        const newContact = this.getContact.value;
        const newAddress = this.getAddress.value;
        const data ={
            id: new Date(),
            newFirstName,
            newLastName,
            newEmail,
            newBirthdate,
            newContact,
            newAddress,
            editing:false
        }
        this.props.dispatch({type: 'UPDATE', id:this.props.user.id, data:data})
    }
    render() {
        return (
            <div>
                <form>
                <h3>First Name :</h3>
                <input required type="text" ref={(input) => this.getFirstName = input}
                defaultValue={this.props.user.firstname} placeholder="First Name"/>
                <h3>Last Name :</h3>
                <input required type="text" ref={(input) => this.getLastName = input}
                defaultValue={this.props.user.lastname} placeholder="Last Name"/>
                <h3>Email :</h3>
                <input required type="email" ref={(input) => this.getEmail = input} 
                defaultValue={this.props.user.email} placeholder="Enter Ur Email" />
                <h3>BirthDate :</h3>
                <input required type="date" ref={(input) => this.getBirthdate = input}
                defaultValue={this.props.user.birthdate} placeholder="Enter Ur BirthDate"/>
                <h3>Contact</h3>
                <input required type="number" ref={(input) => this.getContact = input}
                defaultValue={this.props.user.contact} placeholder="Enter Ur Phone NO" />
                <h3>Address</h3>
                <textarea required rows="5" ref={(input) => this.getAddress = input}
                cols="20" defaultValue={this.props.user.address} placeholder="Enter address" /><br />
                <Button onClick={this.handleEdit} 
                variant="contained" color="primary">
                Update</Button>
                </form>
            </div>
        );
    }
}

export default connect()(EditUser)