import React, {useState } from "react";
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import image from './img/map.png';
import deletebtn from './img/deletbtn2.png'
import "../index.css";
import { AxiosWithAuth } from "../utils/axiosWithAuth";

const initialRestaurant = {
  name: "",
  city: "",
  phone_number: "",
  rating: "",
  notes: "",
  website: ""
};

export default function RestaurantCard({restaurant, updateRestaurants}) {
  console.log("props", restaurant)
  // console.log("restaurant", props)  
  const [editing, setEditing] = useState(false);
  const [restaurantToEdit, setRestaurantToEdit] = useState(initialRestaurant);
  const [restaurantToDelete, setRestaurantToDelete] = useState(initialRestaurant);

  const editRestaurant = restaurant => {
    setEditing(true);
    setRestaurantToEdit(restaurant);
    console.log(restaurant);
  };

  const saveEdit = (e, id) => {
    e.preventDefault();
    AxiosWithAuth().put(`/restaurants/${id}`, restaurantToEdit)
    .then(res => {
      AxiosWithAuth().get('/restaurants')
      .then(restaurants => { updateRestaurants(restaurants.data)
        setEditing(false)})
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  };
  const deleteRestaurant = restaurant => {
    setRestaurantToDelete(restaurant);
    AxiosWithAuth().delete(`/restaurants/${restaurant.id}`)
    .then(res => {
      AxiosWithAuth().get('/restaurants')
      .then(res => updateRestaurants(res.data))
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
    };
    

    return(
      <div className="card-container" >
         {editing && (
        <form onSubmit={(e) => saveEdit(e, restaurantToEdit.id)}>
          <legend>Edit Restaurant</legend>
          <label>
            Name: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, name: e.target.value })
              }
              value={restaurantToEdit.name}
            />
          </label>
          <label>
            City: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, city: e.target.value })
              }
              value={restaurantToEdit.city}
            />
          </label>
          <label>
            Phone Number: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, phone_number: e.target.value })
              }
              value={restaurantToEdit.phone_number}
            />
          </label>
          <label>
            Rating: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, rating: e.target.value })
              }
              value={restaurantToEdit.rating}
            />
          </label>
          <label>
            Notes: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, notes: e.target.value })
              }
              value={restaurantToEdit.notes}
            />
          </label>
          <label>
            Webpage: 
            <input
              onChange={e =>
                setRestaurantToEdit({ ...restaurantToEdit, website: e.target.value })
              }
              value={restaurantToEdit.website}
            />
          </label>
          
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
          {restaurant.map(item => {
              return(
                <CardDeck >
                  <Card >
                    <CardBody>
                    <div className="title-img">
                      <CardTitle>Name: {item.name} </CardTitle>
                      <img src={image} alt="Restaurant Card image "/>
                      <img src={deletebtn} id='remove-btn' alt="Delete Card image"
                      onClick={e => {
                        e.stopPropagation();
                        deleteRestaurant(item)
                      }}
                      />
                    </div>
                      <CardSubtitle>City: {item.city}</CardSubtitle>
                      <CardText>Phone Number: {item.phone_number}</CardText>
                      <CardText>My rating: {item.rating}</CardText>
                      <CardText>Notes: {item.notes}</CardText>
                      <CardText >Webpage: {item.website}</CardText>
                      <Button onClick={() => editRestaurant(item)}>Edit</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              );
          })} 
           
      </div>
    )
}

