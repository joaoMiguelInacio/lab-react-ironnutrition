import React from 'react';
import foods from '../foods.json';
import { List } from 'antd';

const FoodList = () => {
  return (
    <div>
        <h1>FoodList</h1>
        <List
    itemLayout="vertical"
    dataSource={foods}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<p>{item.name}</p>}
          description={<p>very delicious {item.name} </p>}
        />
        <img
            width={272}
            alt="logo"
            src={`${item.image}`}
          />
      </List.Item>
    )}
  />
    </div>
  )
}

export default FoodList