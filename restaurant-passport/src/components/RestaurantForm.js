import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';


function RestaurantForm({ values, errors, touched, status}){
    const [restaurant, setRestaurant] = useState([
        {
            restaurantName:"restaurant",
            city:"my city"
        }
    ]);

    useEffect(()=>{
        status && setRestaurant(restaurant =>[...restaurant, status]);
    }, [status]);

    return(
        <div className="restaurant-form">
            <Form className="div1">
                <Field type= "text" name ="restaurantName" placeholder ="Restaurant Name" />
                {touched.restaurantName && errors.restaurantName && <p>{errors.restaurantName}</p>}

                <Field type= "text" name ="streetAddress" placeholder ="Street" />
                {touched.streetAddress && errors.streetAddress && <p>{errors.streetAddress}</p>}
                
                <Field type= "text" name ="city" placeholder ="City" />
                {touched.city && errors.city && <p>{errors.city}</p>}
                
                <Field type= "number" name ="zipCode" placeholder ="Zip code" />
                {touched.zipCode && errors.zipCode && <p>{errors.zipCode}</p>}
                
                <Field type= "number" name ="phoneNumber" placeholder ="Phone Number" />
                {touched.phoneNumber && errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                
                <Field type= "text" name ="websiteURL" placeholder ="Web address" />
                {touched.websiteURL && errors.websiteURL && <p>{errors.websiteURL}</p>}
                
                <Field type= "number" name ="myRating" placeholder ="Your Rating" />
                {touched.myRating && errors.myRating && <p>{errors.myRating}</p>}
                
                <Field as="textarea" type="text"name ="notes" placeholder ="Notes" />
                {touched.notes && errors.notes && <p>{errors.notes}</p>}
                
                <Field as="select" className="impressed-select" name ="stamped" placeholder ="Impressed?" >
                    <option disabled>Impressed?</option>
                    <option value="true">Yep</option>
                    <option value="false">Nope</option>
                    {touched.stamped && errors.stamped && <p>{errors.stamped}</p>}
                </Field>        
                <button type="submit"> Add Reataurant </button>
            </Form>
            <RestaurantCard restaurant={restaurant}/>
        </div>
    );  
}
    const FormikRestaurantForm =withFormik({
        mapPropsToValues(props){
            return{
                restaurantName: props.restaurantName || "",
                streetAddress: props.streetAddress || "" ,
                city: props.city || "",
                zipCode: props.zipCode || "",
                phoneNumber: props.phoneNumber || "",
                websiteURL: props.websiteURL || "",
                myRating: props.myRating || "",
                notes: props.notes || "",
                stamped: props.stamped || ""
            }
        },

        validationSchema: Yup.object().shape({
            restaurantName: Yup.string()
                .required("Restaurant Name is required"),
            streetAddress: Yup.string()
                .required("Address  is required"),
            city: Yup.string()
                .required("City is required"),
            zipCode: Yup.number()
                .required("Add zip code"),
            phoneNumber:Yup.number()
                .required("Add phone number"),
            websiteURL: Yup.string()
                .required("WebSite is required"),
            myRating: Yup.number()
                .required("Add rating"),
        }),
        
        handleSubmit(values, { resetForm, setStatus}){
            axios.post("https://reqres.in/api/users", values)
            .then(response =>{
                console.log("Restaurant form Response", response);
                resetForm();
                setStatus(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
        }

    })(RestaurantForm);
 export default FormikRestaurantForm;