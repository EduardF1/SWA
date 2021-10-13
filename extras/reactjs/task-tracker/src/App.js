import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Lunch at Baba's",
            day: 'Dec 7th at 4:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Meeting at University',
            day: 'Dec 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Meeting at HQ',
            day: 'Dec 6th at 6:20pm',
            reminder: true
        },
    ]);
    return (
        <div className="container">
            <Header/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
