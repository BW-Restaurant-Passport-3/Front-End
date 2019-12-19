import React from 'react';

function Home(props) {
    return (
      <div className="home-wrapper">
          
            <div className="image-wrapper">
                <img
                className="home-image"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
                />
            </div>
        <div className="buttons-wrapper">
            <button onClick={() => props.history.push("/signup")} className="md-button">
           Signup
        </button>
        <button onClick={() => props.history.push("/login")} className="md-button">
          Login
        </button></div>
      </div>
    );
  }
export default Home;