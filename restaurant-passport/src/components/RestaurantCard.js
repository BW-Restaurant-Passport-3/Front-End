import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import "../index.css";

export default function RestaurantCard(props) {
  
  console.log("restaurant", props)
    return(
      <div className="card-container" >
          {props.restaurant.map(item => {
              return(
                <CardDeck >
                  <Card >
                    <CardImg top width="100%" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Name: {item.name}</CardTitle>
                      <CardSubtitle>City: {item.city}</CardSubtitle>
                      <CardText>Phone Number: {item.phone_number}</CardText>
                      <CardText>My rating: {item.rating}</CardText>
                      <CardText>Notes: {item.notes}</CardText>
                      <CardText >Webpage {item.website}</CardText>
                      <Button src={item.website}>View more</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              );
          })}
      </div>
    )
}

