import React from 'react';
import foods from '../foods.json';
import FoodCard from './FoodCard';
import { Col } from 'antd';

const FoodBoxContainer = () => {
  const displayCards = () => {
    return foods.map((element) => {
        console.log(element)
      return (
        <FoodCard
          name={element.name}
          image={element.image}
          calories={element.calories}
          servings={element.servings}
        />
      );
    });
  };
  return (
    <Col style={{display: "flex", flexWrap : "wrap"}}>
        {displayCards()}
    </Col>
  )
};

export default FoodBoxContainer;
