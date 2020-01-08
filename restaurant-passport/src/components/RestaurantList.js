import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import axios from 'axios';

export default function RestaurantList() {
// const [restaurant, setRestaurant] = useState([])
// const APIurl="https://bw-restaurant-passport.herokuapp.com/"

//   useEffect(() => {
//     axios
//     .get(APIurl)
//     .then(response => {
//       console.log(response)
//       setRestaurant(response.data.results)
//     })
   
//     .catch(error =>{
//       console.error('Server error', error)
//     })
//     }, []);
  return (
    <section className="character-list">
      <h2>Hello there</h2>
        {/* {restaurant.map(item =>(
       <RestaurantCard key ={item.id} restaurant={restaurant}/>
      ))} */}
    </section>
  );
}