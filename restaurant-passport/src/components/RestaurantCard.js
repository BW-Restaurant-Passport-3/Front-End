import React from "react";
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import image from './img/map.png';
import deletebtn from './img/deletbtn2.png'
import "../index.css";


export default function RestaurantCard(props) {
  
  console.log("restaurant", props)  

    return(
      <div className="card-container" >
          {props.restaurant.map(item => {
              return(
                <CardDeck >
                  <Card >
                    <CardBody>
                    <div className="title-img">
                      <CardTitle>Name: {item.city} </CardTitle>
                      <img src={image} alt="Restaurant Card image "/>
                      <img src={deletebtn} id='remove-btn' alt="Delete Card image "/>
                    </div>
                      <CardSubtitle>City: {item.city}</CardSubtitle>
                      <CardText>Phone Number: {item.phone_number}</CardText>
                      <CardText>My rating: {item.rating}</CardText>
                      <CardText>Notes: {item.notes}</CardText>
                      <CardText >Webpage: {item.website}</CardText>
                      <Button>
                        Edit</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              );
          })} 
      </div>
    )
}

