import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

export default function Submit() {
  const [formInput, setFormInput] = useState({
    latitude: 0,
    longitude: 0,
    duckCount: 0,
    foodType: "",
    foodAmount: "",
    time: ""
  });

  const handleChange = e => {
    setFormInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form>
      <Form.Input
        label="Food Type"
        type="text"
        name="foodType"
        placeholder="e.g seed, bread"
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Food Amount"
        type="text"
        name="foodType"
        placeholder="e.g 500g"
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Number of ducks"
        type="number"
        name="duckCount"
        placeholder="0"
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Date and time of feeding"
        type="datetime-local"
        name="duckCount"
        onChange={e => handleChange(e)}
      />
    </Form>
  );
}
