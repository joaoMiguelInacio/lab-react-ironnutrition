import './App.css';
import foods from './foods.json';
import React from 'react';
import { useState } from 'react';
import { Form } from 'antd';
import FoodList from './components/FoodList';
import FoodCard from './components/FoodCard';
import FoodBoxContainer from './components/FoodBoxContainer';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [data, setData] = useState(foods);
  const [form] = Form.useForm();
  const displayCards = () => {
    return data.map((element) => {
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
  const onFinish = (values) => {
    let newData = [...data];
    newData.push(values);
    setData(newData);
    form.resetFields();
    };
  return (
    <div className="App">
      {/*<FoodList />*/}
      <FoodBoxContainer displayCards={displayCards} />
      <AddFoodForm onFinish={onFinish} form={form}/>
    </div>
  ) 
}
export default App;