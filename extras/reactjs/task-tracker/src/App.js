import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useEffect, useState} from "react";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const apiUrl = 'http://localhost:4300/tasks';

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks().then(() => console.log('Avoid warnings.'));
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await axios.get(`${apiUrl}`);
        return await res.data;
    }

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
