import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';


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
                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
                <button type="submit"> LogIn </button>
                <p>Forgot your password?</p>
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
                .required("Please add username!"),
            password: Yup.string()
                .required("Please add password!")
        }),
        
        handleSubmit(values, { resetForm, setStatus}){
            axios.post("https://reqres.in/api/users", values)
            .then(response =>{
                console.log("Login Response", response);
                resetForm();
                setStatus(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
        }

    })(Login);
 export default FormikLoginForm;