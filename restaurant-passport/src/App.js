import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FormikSignInForm from './components/SignupForm'
import FormikLoginForm from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'
import FormikRestaurantForm from './components/RestaurantForm'
import RestaurantCard from './components/RestaurantCard';
import PrivateRoute from './utils/PrivateRoute';

import Footer from './components/Footer.js'
function App() {
  return (
    <main>
      <Navigation/>
      <Route exact path="/" component ={Home}/>
      <Route exact path="/signup" render={(props) => <FormikSignInForm {...props}/>} />
      <Route exact path="/login" render={(props) => <FormikLoginForm {...props}/>} />
      <PrivateRoute path="/form" component= {FormikRestaurantForm}/>
     {/* <Route exact path="/list" component= {RestaurantList}/> */}
      <Route exact path="/restaurant" component= {RestaurantCard}/>
      <Footer/>
    </main>
  );
}

export default App;
