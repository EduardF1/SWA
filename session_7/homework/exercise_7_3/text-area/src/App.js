import React, {useState} from "react";

function App() {
    const [name, setName] = useState("");

    return (
        <div className="App">
            {name}
            <br/><textarea
            name="Name"
            id="name"
            data-tid="avy"
            onChange={(e) => setName(e.target.value)}
        />
        </div>
    );
}

export default App;