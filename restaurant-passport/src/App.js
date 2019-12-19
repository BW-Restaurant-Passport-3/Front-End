import React from 'react';
import './App.css';
import FormikSignInForm from './components/SignupForm'
import FormikLoginForm from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <FormikLoginForm/>
         <FormikSignInForm/>
      </header>
    </div>
  );
}

export default App;
