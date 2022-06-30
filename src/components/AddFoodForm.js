import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const AddFoodForm = ({ onFinish, form, layout, validateMessages,setShow }) => {
  return (
    <>
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={() => setShow(false)}> Hide form </Button> 
        </Form.Item>
      </Form>
    </>
  );
};

export default AddFoodForm;
