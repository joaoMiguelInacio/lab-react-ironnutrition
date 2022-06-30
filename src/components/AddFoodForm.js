import React from 'react';
import { Button, Form, Input, InputNumber, Divider } from 'antd';

const AddFoodForm = ({ onFinish, form, layout, validateMessages,setShow }) => {
  return (
    <>
      <Divider>Add Food</Divider>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={'name'}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={'image'}
          label="Image"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={'calories'}
          label="Calories"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 2000,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={'servings'}
          label="Servings"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 10,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{marginRight : 20}}>
            Submit
          </Button>
          <Button type="primary" ghost onClick={() => setShow(false)}>
            Hide form 
          </Button> 
        </Form.Item>
        
      </Form>
    </>
  );
};

export default AddFoodForm;
