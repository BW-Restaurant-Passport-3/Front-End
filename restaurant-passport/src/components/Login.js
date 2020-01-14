import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';


function Login({ values, errors, touched, status}){
    const [member, setMember] = useState([]);

    useEffect(()=>{
        status && setMember(member =>[...member, status]);
    }, [status]);

    return(
        <div className="login-form">
            <Form className="formCol">
                <Field type= "text" name ="username" placeholder ="Username" />
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field type= "password" name ="password" placeholder ="Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type="submit"> Login </button>
            </Form>
            <div className="formCol">
                <img src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"/>
            </div>
        </div>
    );  
}
    const FormikLoginForm =withFormik({
        
        mapPropsToValues(props){
            return{
                username: props.username || "",
                password: props.password || "" 
            }
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required("Username is required"),
            password: Yup.string()
                .required("Password is required")
        }),
        handleSubmit(values, {props}){
            
            AxiosWithAuth()
                .post("/auth/login", values)
                .then(res => {
                    console.log("Response", res.data);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', res.data.user);
                    props.history.push('/form');
                    
                })
                .catch(error => console.log(error));
        }
       

    })(Login);
 export default FormikLoginForm;