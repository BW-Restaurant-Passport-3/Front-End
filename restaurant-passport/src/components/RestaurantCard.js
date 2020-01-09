import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import image from './img/map.png';
import "../index.css";

export default function RestaurantCard(props) {
  
  console.log("restautrant", props)
    return(
      <div className="card-container" >
          {props.restaurant.map(item => {
              return(
                <CardDeck >
                  <Card >
                  {/* <CardImg top width="10%" src={image} alt="Restaurant Card image " /> */}
                    <CardBody>

                    <div className="title-img">
                      <CardTitle>Name: {item.city} </CardTitle>
                      <img src={image} alt="Restaurant Card image "/>
                    </div>
                      <CardSubtitle>City: {item.city}</CardSubtitle>
                      <CardText>Phone Number: {item.phone_number}</CardText>
                      <CardText>My rating: {item.rating}</CardText>
                      <CardText>Notes: {item.notes}</CardText>
                      <CardText >Webpage: {item.website}</CardText>
                      <Button src={item.website}>View more</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              );
          })} 
      </div>
    )
}

