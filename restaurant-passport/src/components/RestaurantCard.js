import React from "react";
import { Col, Row,
  Card, CardText, 
  CardTitle, CardSubtitle, 
} from 'reactstrap';
import "../index.css";

export default function RestaurantCard(props) {
    console.log("restautrant", props)
  return(
      <div>
          {props.restaurant.map(item => {
              return(
                <div  key={item.id}
                    className="cardbox">
                    <Row>
                        <Col key={props.id} >
                            <Card className="card-info">
                                <div className ="descriprion">    
                                <CardTitle>Name: {item.restaurantName}</CardTitle>
                                <CardSubtitle>City: {item.city}</CardSubtitle>
                                <CardText>Web page: {item.websiteURL}</CardText>
                                <CardText>Phone Number: {item.phoneNumber}</CardText>
                                <CardText>My rating: {item.myRating}</CardText>
                                <CardText>Notes: {item.notes}</CardText>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
              )
            })}
      </div>
  )
}

