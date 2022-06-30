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
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let newData = [...data];
    newData.push(values);
    setData(newData);
    form.resetFields();
    };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  return (
    <div className="App">
      {/*<FoodList />*/}
      <FoodBoxContainer displayCards={displayCards} />
      <AddFoodForm onFinish={onFinish} form={form} layout={layout} validateMessages={validateMessages}/>
    </div>
  ) 
}
export default App;