import React from 'react';
import { Card, Button } from 'antd';

const FoodCard = ({name, image, calories, servings}) => {
    const totalCalories = calories * servings;
  return (
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories}  </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
  )
}

export default FoodCard