import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/results" component={SearchResults}/>
            </Switch>
        </div>
    );
}

export default App;
