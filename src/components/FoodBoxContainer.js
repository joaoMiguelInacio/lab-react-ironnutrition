import React from 'react';
import { Col } from 'antd';

const FoodBoxContainer = ({displayCards}) => {
  return (
    <Col style={{display: "flex", flexWrap : "wrap"}}>
        {displayCards()}
    </Col>
  )
};

export default FoodBoxContainer;
