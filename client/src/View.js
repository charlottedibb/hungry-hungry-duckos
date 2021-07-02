import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

export default function View() {
  const [feedings, setFeedings] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/feedings`)
      .then(res => setFeedings(res.data))
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  const cards = feedings.map(feeding => (
    <Card
      header={`${feeding.duck_count} ducks were feed`}
      meta={`Latitude: ${feeding.latitude}`}
      meta={`Longitude: ${feeding.longitude}`}
      meta={feeding.feeding_time}
      description={`Type of food: ${feeding.food_type}`}
      description={`Amount of food: ${feeding.food_amount}`}
    />
  ));

  return <div>{cards}</div>;
}
