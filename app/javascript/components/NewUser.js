import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
//import phoneRegExp from './Regx'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
//import { Link } from 'react-router-dom';

class NewUser extends Component {

    render() {
        return (
            <Formik 
            initialValues={{
                id: new Date,
                firstname: '',
                lastname: '',
                contact: '',
                address: ''
            }}
            validationSchema={Yup.object().shape({
                firstname: Yup.string()
                    .min(2, "*First Name at least have 2 characters")
                    .max(100, "*First cant be longer than 100 character")
                    .required('First Name is Required'),
                lastname: Yup.string()
                    .min(2, "*Last Name at least have 2 characters")
                    .max(100, "*Last cant be longer than 100 character")
                    .required('Last Name is Required'),
                contact: Yup.string()
                    //.matches(phoneRegExp, "*Phone number is not valid")
                    .required("*Phone number Required"),
                address: Yup.string()
                    .min(10, "*Address at least have 10 characters")
                    .max(100, "*Address cant be longer than 100 character")    
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);

                setTimeout(() => {
                    this.props.dispatch({type: 'ADD_USER', values})
                    console.log(values);
                    resetForm();
                    setSubmitting(false);
                }, 500);
            }}>

            {( {values,
                errors,
                touched
                }) => (
                    <Form>
                        <label>First name </label><br />
                        <Field 
                            name="firstname"
                            type="text" 
                            className={'form-control' + touched.firstname && errors.firstname ? "error" : null}
                        /><br />
                            <ErrorMessage name="firstname" />
                        <label>Last name </label><br />
                        <Field 
                            name="lastname"
                            type="text" 
                            className={'form-control' + touched.lastname && errors.lastname ? "error" : null}
                        /><br />
                        <ErrorMessage name="lastname" />
                        <label>Contact</label><br />
                        <Field
                            name="contact"
                            type="text"
                            className={'form-control' + touched.contact && errors.contact ? "error" : null }
                        /><br />
                        <ErrorMessage name="contact"/>
                        <label>Address</label><br />
                        <Field
                            name="address"
                            type="text"
                            className={'form-control' + touched.address && errors.address ? "error": null}
                        /><br /><br />
                        <ErrorMessage name="address" />
                        <Button type="submit" 
                            variant="contained" color="primary">
                            Submit</Button>
                    </Form>  
                )}
            </Formik>    
        );
    }
}

export default connect()(NewUser)