import React, { Component } from 'react'

class NewUser extends Component {
    render() {
        return (
            <div>
               <h1>User Info</h1>
               <form>
                   <h3>Name</h3>
                   <input required type="text" placeholder="Name"/>
                   <h3>Email</h3>
                   <input required type="email" placeholder="Enter Ur Email" />
                   <h3>Contact</h3>
                   <input />
               </form> 
            </div>
        );
    }
}

export default NewUser