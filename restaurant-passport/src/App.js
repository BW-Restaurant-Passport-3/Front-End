import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FormikSignInForm from './components/SignupForm'
import FormikLoginForm from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'

function App() {
  return (
    <main>
      <Navigation/>
      <Route exact path="/" component ={Home}/>
      <Route exact path="/signup" component ={FormikSignInForm}/> 
      <Route exact path="/login" component ={FormikLoginForm}/> 
    </main>
  );
}

export default App;
