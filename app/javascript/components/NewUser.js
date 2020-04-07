import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewUser extends Component {
    handleSubmit = (e) =>{
        e.perverntDefault();
        const name = this.getName.value;

        const Data ={
            id: new Date(),
            name,
            
        }
    }
    render() {
        return (
            <div>
               <h1>User Info</h1>
               <form onClick={}>
                   <h3>Name</h3>
                   <input required type="text" placeholder="Name"/>
                   <h3>Email</h3>
                   <input required type="email" placeholder="Enter Ur Email" />
                   <h3>BirthDate</h3>
                   <input required type="date" placeholder="Enter Ur BirthDate"/>
                   <h3>Contact</h3>
                   <input required type="number" placeholder="Enter Ur Phone NO" />
                   <button>Submit</button>
               </form> 
            </div>
        );
    }
}

export default NewUser