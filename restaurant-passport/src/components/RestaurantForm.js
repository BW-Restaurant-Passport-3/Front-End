import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';


function RestaurantForm({ values, errors, touched, status}){
    const [restaurant, setRestaurant] = useState([
        {
            "id": 1,
            "name": "Crossroads",
            "city": "Los Angeles",
            "zipcode": "1234",
            "phone_number": "123-456-7890",
            "website": "www.restaurant.com",
            "rating": 5,
            "notes": "I like it",
            "stamped": 1,
            "user_id": 1
          },
          {
            "id": 2,
            "name": "Gracias Madre",
            "city": "Los Angeles",
            "zipcode": "1234",
            "phone_number": "123-456-7890",
            "website": "www.lambdaschool.com",
            "rating": 2,
            "notes": "Over rated",
            "stamped": 1,
            "user_id": 1
          },
          {
            "id": 3,
            "name": "Muchies",
            "city": "Santa Ana",
            "zipcode": "1234",
            "phone_number": "123-456-7890",
            "website": "www.google.com",
            "rating": null,
            "notes": "Annoying social media",
            "stamped": 0,
            "user_id": 1
          },
          {
            "id": 4,
            "name": "Native",
            "city": "Costa Mesa",
            "zipcode": "1234",
            "phone_number": "123-456-7890",
            "website": "www.facebook.com",
            "rating": 4,
            "notes": "I like it",
            "stamped": 1,
            "user_id": 2
          }
    ]);
    const delRestaurant = id => {
        const newArray = restaurant.filter(item => {
          return item.id !== id;
        });
        setRestaurant(newArray);
      };

    useEffect(()=>{
        status && setRestaurant(restaurant =>[...restaurant, status]);
    }, [status]);

    return(
        <div className="restaurant-form">
            <Form className="div1">
             <div className="formCol">
             <Field type= "text" name ="name" placeholder ="Restaurant Name" />
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field type= "text" name ="streetAddress" placeholder ="Street" />
                {touched.streetAddress && errors.streetAddress && <p>{errors.streetAddress}</p>}
                
                <Field type= "text" name ="city" placeholder ="City" />
                {touched.city && errors.city && <p>{errors.city}</p>}
                
                <Field type= "number" name ="zipcode" placeholder ="Zip code" />
                {touched.zipcode && errors.zipcode && <p>{errors.zipcode}</p>}
                
                <Field type= "number" name ="phone_number" placeholder ="Phone Number" />
                {touched.phone_number && errors.phone_number && <p>{errors.phone_number}</p>}
                
                <Field type= "text" name ="website" placeholder ="Web address" />
                {touched.website && errors.website && <p>{errors.website}</p>}
             </div>
                
               <div className="formCol">
               <Field type= "number" name ="rating" placeholder ="Your Rating" />
                {touched.rating && errors.rating && <p>{errors.rating}</p>}
                
                <Field as="textarea" type="text"name ="notes" placeholder ="Notes" />
                {touched.notes && errors.notes && <p>{errors.notes}</p>}
                
                <Field as="select" className="impressed-select" name ="stamped" placeholder ="Impressed?" >
                    <option disabled>Impressed?</option>
                    <option value="true">Yep</option>
                    <option value="false">Nope</option>
                    {touched.stamped && errors.stamped && <p>{errors.stamped}</p>}
                </Field>        
                <button type="submit"> Add Reataurant </button>
               </div>
            </Form>
            <RestaurantCard delRestaurantFn={delRestaurant} restaurant={restaurant}/>
        </div>
    );  
}
    const FormikRestaurantForm =withFormik({
        mapPropsToValues(props){
            return{
                name: props.name || "",
                streetAddress: props.streetAddress || "" ,
                city: props.city || "",
                zipcode: props.zipcode || "",
                phone_number: props.phone_number || "",
                website: props.website || "",
                rating: props.rating || "",
                notes: props.notes || "",
                stamped: props.stamped || ""
            }
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Restaurant Name is required"),
            streetAddress: Yup.string()
                .required("Address  is required"),
            city: Yup.string()
                .required("City is required"),
            zipcode: Yup.number()
                .required("Add zip code"),
            phone_number:Yup.number()
                .required("Add phone number"),
            website: Yup.string()
                .required("WebSite is required"),
            rating: Yup.number()
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