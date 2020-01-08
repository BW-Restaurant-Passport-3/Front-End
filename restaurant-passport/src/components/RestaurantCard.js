import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import "../index.css";

export default function RestaurantCard(props) {
  
  console.log("restautrant", props)
    return(
      <div className="card-container" >
          {props.restaurant.map(item => {
              return(
                <CardDeck >
                  <Card >
                    <CardImg top width="100%" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Name: {item.restaurantName}</CardTitle>
                      <CardSubtitle>City: {item.city}</CardSubtitle>
                      <CardText>Phone Number: {item.phoneNumber}</CardText>
                      <CardText>My rating: {item.myRating}</CardText>
                      <CardText>Notes: {item.notes}</CardText>
                      <Button >See webpage {item.websiteURL}</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              );
          })}
      </div>
    )
}

