import React from "react";
import { Card, Col, Row } from "react-bootstrap";


const NewsItem = ({newsItem}) => {
	const {title,urlToImage,description}=newsItem
	return  <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
};

export default NewsItem;
