import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import addUser from '../actions'

const Form = (props,{dispatch}) => {
  const {
    values: {firstname, lastname, contact, address },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  
   console.log("Values is arr?",props.values);
   console.log("Props" ,props);
   console.log("Errors",props.errors)
  
  const change = ( name, e ) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  console.log(props)
  return (
    <form onSubmit={() => dispatch(addUser(props.values))}>
      <TextField
        id="firstname"
        name="firstname"
        label="First Name"
        fullWidth
        helperText={touched.firstname ? errors.firstname : ""}
        error={touched.firstname && Boolean(errors.firstname)}
        onChange={change.bind(null ,"firstname")}

      />

      <TextField
        id="lastname"
        name="lastname"
        label="Last Name"
        fullWidth
        helperText={touched.lastname ? errors.lastname : ""}
        error={touched.lastname && Boolean(errors.lastname)}
        onChange={change.bind(null ,"lastname")}
          
      />
      <TextField
        id="contact"
        name="contact"
        label="Contact"
        fullWidth
        helperText={touched.contact ? errors.contact : ""}
        error={touched.contact && Boolean(errors.contact)}
        onChange={change.bind(null ,"contact")}
          
      />
      <TextField
        id="address"
        name="address"
        label="Address"
        fullWidth
        helperText={touched.address ? errors.address : ""}
        error={touched.address && Boolean(errors.address)}
        onChange={change.bind(null ,"address")}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained" 
        color="primary"
        disabled={!isValid}
      > 
        Submit
      </Button>
    </form>
  );
};  

// const mapDispatchToProps = ({
//   submit: addUser(values)
// })

export default connect()(Form)   