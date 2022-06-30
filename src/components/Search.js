import React from 'react';
import { Form, Input } from 'antd';

export default function Search({ searchedString, setSearchedString, layout }) {
  if (false) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <Form {...layout}>
          <Form.Item name={'search'} label="Search">
            <Input
              type="text"
              placeholder="Seach Food"
              value={searchedString}
              onChange={(e) => setSearchedString(e.target.value)}
            />
          </Form.Item>
        </Form>
      </>
    );
  }
}
