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

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setFormInput(prev => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));
      });
    } else {
      alert("Please enable location services to use this feature");
    }
  };

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
    <Form onSubmit={e => e.preventDefault()}>
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
      <Form.Button onClick={getLocation}>Get My Current Location</Form.Button>
      <Form.Input
        label="Latitude"
        type="number"
        name="latitude"
        value={formInput.latitude}
        required
        onChange={e => handleChange(e)}
      />
      <Form.Input
        label="Longitude"
        type="number"
        name="longitude"
        value={formInput.longitude}
        required
        onChange={e => handleChange(e)}
      />
      <Form.Button type="submit" onClick={handleSubmit}>
        Submit
      </Form.Button>
    </Form>
  );
}
