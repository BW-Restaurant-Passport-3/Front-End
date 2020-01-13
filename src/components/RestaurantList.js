import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import axios from 'axios';

export default function RestaurantList() {
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
      <h2>Restaurants you visited</h2>
        {restaurant.map(item =>(
       <RestaurantCard key ={item.id} restaurant={restaurant}/>
      ))}
    </section>
  );
}