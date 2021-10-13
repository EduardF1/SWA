import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
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

    // Add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newTask = {id, ...task};
      setTasks([...tasks, newTask]);
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {
                showAddTask && <AddTask onAdd={addTask}/>
            }
            {
                tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
                ('No tasks to show.')
            }
        </div>
    );
}

export default App;
