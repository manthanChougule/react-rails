import React, {Component} from 'react'
import {Formik} from 'formik'
import withStyles from '@material-ui/core/styles/withStyles'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Form from '../container/form'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import { addUser, addUsers } from '../actions'


const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px `,
    maxWidth: "sm"
  },
  container: {
  maxWidth: "500px"
  },
  container2: {
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px`,
  }
});

const phoneRegExp2 = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/

const validationSchema = Yup.object({
  firstname: Yup.string()
      .min(2, "*First Name at least have 2 characters")
      .max(50, "*First cant be longer than 50 character")
      .required('First Name is Required'),
  lastname: Yup.string()
      .min(2, "*Last Name at least have 2 characters")
      .max(50, "*Last cant be longer than 50 character")
      .required('Last Name is Required'),
  contact: Yup.string()
      .matches(phoneRegExp2, "*Phone number is not valid")
      .required("*Phone number Required"),
  address: Yup.string()
      .min(20, "*Address at least have 20 characters")
      .max(100, "*Address cant be longer than 100 character")
      .required("Adress is required")
})

class InputForm extends Component {
  render() {
    const classes = this.props;
    const values = { id: new Date(),firstname: "", lastname: "" , contact: "", address: "" };
    const handleSubmit = (values) => dispatch(addUsers(values))
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Container className={classes.container2}>
              <h1>Form</h1>
              <Formik 
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {props => <Form {...props}/>}
              </Formik>
            </Container>
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("New_User",state)
    return {
        users: state.users
    }
}

const NewUser = withStyles(styles)(InputForm)
export default connect(mapStateToProps)(NewUser)
