import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
            </Switch>
        </div>
    );
}

export default App;
