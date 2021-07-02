import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function Submit() {
  const [formInput, setFormInput] = useState({
    location: "",
    duckCount: 0,
    foodType: "",
    foodAmount: "",
    time: ""
  });

  const handleChange = e => {
    setFormInput({ [e.target.name]: e.target.value });
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
        value="0"
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
