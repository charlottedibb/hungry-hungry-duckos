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

  const cards = feedings.map(feeding => {
    const formattedDate = new Date(feeding.feeding_time).toLocaleDateString(
      undefined,
      {
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    );

    const formattedTime = new Date(feeding.feeding_time).toLocaleTimeString(
      undefined,
      {
        timeZoneName: "short"
      }
    );

    const description = (
      <ul>
        <li>Type of food: {feeding.food_type}</li>
        <li>Amount of food: {feeding.food_amount}</li>
        <li>Time fed: {formattedTime}</li>
      </ul>
    );

    const extra = (
      <ul>
        <li>Latitude: {feeding.latitude}</li>
        <li>Longitude: {feeding.longitude}</li>
      </ul>
    );

    return (
      <Card
        header={`${feeding.duck_count} ducks were fed`}
        meta={formattedDate}
        description={description}
        extra={extra}
      />
    );
  });

  return <div>{cards}</div>;
}
