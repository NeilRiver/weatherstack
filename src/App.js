
import { useEffect, useState } from "react";
import "./App.css";
import CardWeather from "./components/CardWeather/CardWeather.js";

const API = "access_key=e63715a05bd024aed0b4d3ae6f8f6400";
const url = "http://api.weatherstack.com/";

function App() {
  const [state, setWeather] = useState(0);

  // useEffect(async () => {
  //   const fetchData = await fetch(`${url}/current?${API}&query=Minsk`);
  //   const response = await fetchData.json();
  //   setWeather(response);
  //   // .then(response=>response.json())
  //   // .then(data=>console.log(data))
  // }, []);

  return (
    <div className="App">
      <div className="App-header">
        {state === 0 ? "Loading data" : <CardWeather state={state} />}
      </div>
    </div>
  );
}

export default App;
