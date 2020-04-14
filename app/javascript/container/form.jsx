import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const Form = (props) => {
  const {
    values: { id, firstname, lastname, contact, address },
    errors,
    touched,
    handleChange,
    handleSubmit,
    isValid,
    setFieldTouched
  } = props;
  
  // handleSubmit = (values, {props}) => props.dispatch({type: 'ADD_USER', values})
  // console.log(props.values);
  // console.log(props);
  
  const change = ( name, e ) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  console.log(props)
  return (
    <form onSubmit={handleSubmit}>
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
      > {/*onClick={ () => {dispatch({type: 'ADD_USER' , props})}}*/}
        Submit
      </Button>
    </form>
  );
};

export default connect()(Form) 