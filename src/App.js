import './App.css';
import foods from './foods.json';
import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Divider } from 'antd';
import FoodList from './components/FoodList';
import FoodCard from './components/FoodCard';
import FoodBoxContainer from './components/FoodBoxContainer';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import NoResults from './components/NoResults';


function App() {
  const [data, setData] = useState(foods);
  const [searchedString, setSearchedString] = useState("");
  const displayCards = () => {
    return data.map((element) => {
      return (
        <FoodCard
          name={element.name}
          image={element.image}
          calories={element.calories}
          servings={element.servings}
          handleDelete={handleDelete}
        />
      );
    });
  };
  let searchedFoods = null;
  const [noResults, setNoResults] = useState (false);
  useEffect(() => {
    if (searchedString !== "") {
      setNoResults(false);
      let filteredData = data.filter((food) => {
        return food.name.toLowerCase().includes(searchedString.toLowerCase());
      });
      if (filteredData.length >=1){
        setData(filteredData);
      } else {
        setNoResults(true);
      }      
    } else {
      setData(foods);
    }
  }, [searchedString]);
  const handleDelete = (name) => {
    setData(data.filter((element) => element.name !== name));
  };
  const [show, setShow] = useState (false);
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
      {show 
        ? <AddFoodForm setShow= {setShow} onFinish={onFinish} form={form} layout={layout} validateMessages={validateMessages}/>
        : <Button type="primary" className="add-food-btn" onClick={() => setShow(true)}> Add Food </Button>
      }
      <Divider>Search</Divider>
      <Search searchedFoods={searchedFoods} searchedString={searchedString} setSearchedString={setSearchedString} layout={layout}/>
      {noResults
        ? <NoResults />
        : <>
            <Divider>Food</Divider>
            <FoodBoxContainer displayCards={displayCards} />
          </>
      }
    </div>
  ) 
}
export default App;