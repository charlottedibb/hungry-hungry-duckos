import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";
import axios from "axios";

export default function Submit() {
  let history = useHistory();
  
  const [formInput, setFormInput] = useState({
    latitude: 0,
    longitude: 0,
    duckCount: 0,
    foodType: "",
    foodAmount: "",
    feedingTime: null
  });

  const handleChange = e => {
    setFormInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/feedings`, formInput)
      .then(response => history.push("/view"))
      .catch(error => {
        console.error("There was an error!", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Food Type"
        type="text"
        name="foodType"
        placeholder="e.g seed, bread"
        required
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Food Amount"
        type="text"
        name="foodAmount"
        placeholder="e.g 500g"
        required
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Number of ducks"
        type="number"
        name="duckCount"
        placeholder="0"
        required
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Date and time of feeding"
        type="datetime-local"
        name="feedingTime"
        required
        onChange={e => handleChange(e)}
      />
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  );
}
