import './App.css';
import HomePage from './components/HomePage';
import Button from "react-bootstrap/Button";
import {getData, postWeatherData} from "./api-handler/ApiHandler";

function App() {
  return (
    <div className="App">
        <HomePage />
        <div> <Button variant="outline-info" class="" onClick={() => getData("data")}>GET DATA</Button>
          <Button variant="outline-info" onClick={() => postWeatherData("type", "value", "unit", "time", "place", "extras")}>POST DATA</Button></div>
    </div>
  );
}

export default App;
