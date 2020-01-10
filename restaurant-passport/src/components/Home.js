import React from 'react';

function Home(props) {
    return (
      <div className="home-wrapper">
  
           <div className="about-app"> <h3>Any foodie worth their weight in salt should always have 
              ideas of where to eat in their home city whenever the 
              opportunity arises (date night, a rare free night, girls 
              night, bachelor party, etc.). If you are tired of defaulting to
               the same dive spot because of "decision fatigue" every week, 
               RestaurantPassport is the solution. View the restaurants you've
                been to, have suggestions  at your fingertips for any occasion
                 and taste, and brag to your friends about all the cool eateries
                  you've been to!</h3></div>
        <div className="buttons-wrapper">
          {/* <button onClick={() => props.history.push("/form")} className="md-button">
            Restaurant Form
          </button>
          <button onClick={() => props.history.push("/list")} className="md-button">
            Restaurant list
          </button> */}
              <button onClick={() => props.history.push("/signup")} className="md-button">
            Signup
          </button>
          <button onClick={() => props.history.push("/login")} className="md-button">
            Login
          </button>
        </div>
      </div>
    );
  }
export default Home;