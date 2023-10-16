// LoginForm.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {NavLink} from 'react-router-dom';
import './Login.css'

const Login = (props) => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')  

 const initialValues = {
    email: '',
    password: '',
  };

  // const isFormEmpty = !initialValues.email && !initialValues.password;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send a request to the server.
    // Reset the form after successful submission using resetForm().
    console.log(values.email, values.password)
  };

  function handleEmailChange(e) {
    setLoginEmail(e.target.value)
  }
  function handlePasswordChange(e) {
    setLoginPassword(e.target.value)
  }


  return (
    <div className="login-form">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            {/* <label>Email:</label> */}
            <Field className='field' placeholder={'Please enter your Email'} type="text" name="email" onChanage={handleEmailChange} />
            <ErrorMessage  name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            {/* <label>Password:</label> */}
            <Field className='field' placeholder={'Please enter your password'} type="password" name="password" onChanage={handlePasswordChange} />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <NavLink  to={'/products'} className='submit-button' type="submit">Submit</NavLink>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;