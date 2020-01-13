import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import FormikRestaurantForm from '../components/RestaurantForm';

const PrivateRoute = ({ component: Component, ...props}) => {
    return (
        <Route  
        {...props}
        render={() => {
            if(localStorage.getItem("token")) {
                return <FormikRestaurantForm {...props}/>;
            } else {
                return <Redirect to="/login" />;
            }
        }}
         />
    );
};

export default PrivateRoute;