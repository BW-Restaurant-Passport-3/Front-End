import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AxiosWithAuth } from '../utils/axiosWithAuth';

function SignUp ({ values, errors, touched,  status }){
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
       status && setUsers(users => [...users, status]); 
    }, [status]);

    return (
        <div className="signUp-form">  
            <Form className="div1" >
                   <div className="formCol">
                   <Field type="text" name="username" placeholder="Username*" />
                   {touched.username && errors.username && <p className="errors"> {errors.username}</p>}
                   
                    <Field type="password" name="password" placeholder="Password*" />
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    
                    <Field type="text" name="name" placeholder="Name*" />
                   {touched.name && errors.name && <p className="errors"> {errors.name}</p>}
                   </div>
                    
                   <div className="formCol">
                   <Field type="text" name="city" placeholder="City*" />
                   {touched.city && errors.city && <p className="errors"> {errors.city}</p>}

                   <Field type="email" name="email" placeholder="Email*" />
                    {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                   
                <button type="submit"> Sign Up </button>
                   </div>
            </Form>
        </div>
    );
}
const FormikSignInForm = withFormik({
    
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            name: props.name || "",
            email: props.email || "",
            city: props.city ||""
        };
    },
    
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username must be 4 characters minimum")
            .max(15, 'Too Long!')
            .required("User Name is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters minimum")
            .max(10, 'Too Long!')
            .required("Password is required"),
        name: Yup.string()
            .min(2, "Name must be 2 characters minimum")
            .max(15, 'Too Long!'),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        city: Yup.string()
        .required("")
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values, { resetForm, setStatus, props}) {
        
        console.log(values);
        AxiosWithAuth()
          .post("/auth/register", values)
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            // resetForm();
            props.history.push("/login");

            // setStatus(res.data);
          })
          .catch(err => console.error(err));
      }
    })(SignUp);
    
    export default FormikSignInForm;