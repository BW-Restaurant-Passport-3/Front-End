import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function Login({ values, errors, touched, status}){
    const [member, setMember] = useState([]);

    useEffect(()=>{
        status && setMember(member =>[...member, status]);
    }, [status]);

    return(
        <div className="login-form">
            <Form className="div1">
                <Field type= "text" name ="username" placeholder ="Username" />
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field type= "password" name ="password" placeholder ="Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type="submit"> Login </button>
            </Form>
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