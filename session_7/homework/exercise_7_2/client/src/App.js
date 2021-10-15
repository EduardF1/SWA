import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/result" component={SearchResult}/>
            </Switch>
        </div>
    );
}

export default App;
