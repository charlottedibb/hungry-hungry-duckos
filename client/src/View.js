import { useEffect } from "react";
import axios from 'axios';

export default function View() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/feedings`)
      .then(response => console.log(response))
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return <div>View</div>;
}
