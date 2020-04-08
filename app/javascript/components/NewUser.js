import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class NewUser extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        const firstname = this.getFirstName.value;
        const lastname = this.getLastName.value;
        const email = this.getEmail.value;
        const birthdate = this.getBirthdate.value; 
        const contact = this.getContact.value;
        const address = this.getAddress.value;
        const data ={
            id: new Date(),
            firstname,
            lastname,
            email,
            birthdate,
            contact,
            address
        }

        console.log(data)
        this.props.dispatch({
            type:'ADD_USER',
            data});
            this.getFirstName.value = '';
            this.getLastName.value = '';
            this.getEmail.value = '';
            this.getBirthdate.value = '';
            this.getContact.value = '';
            this.getAddress.value = '';
    }
    render() {
        return (
            <div>
               <h1>Fill the Info</h1>
               <form >
                   <h3>First Name</h3>
                   <input required type="text" ref={(input) => this.getFirstName = input}
                   placeholder="First Name"/>
                   <h3>Last Name</h3>
                   <input required type="text" ref={(input) => this.getLastName = input}
                   placeholder="Last Name"/>
                   <h3>Email</h3>
                   <input required type="email" ref={(input) => this.getEmail = input} 
                   placeholder="Enter Ur Email" />
                   <h3>BirthDate</h3>
                   <input required type="date" ref={(input) => this.getBirthdate = input}
                   placeholder="Enter Ur BirthDate"/>
                   <h3>Contact</h3>
                   <input required type="number" ref={(input) => this.getContact = input}
                   placeholder="Enter Ur Phone NO" />
                   <h3>Address</h3>
                   <textarea required rows="5" ref={(input) => this.getAddress = input}
                   cols="20" placeholder="Enter address" /><br />
                   <Button onClick={this.handleSubmit}
                   variant="contained" color="primary">
                    Submit</Button>
                    {/*<button>Submit</button>*/}
               </form> 
            </div>
        );
    }
}

export default connect()(NewUser)