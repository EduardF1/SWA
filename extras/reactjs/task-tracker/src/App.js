import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import axios from "axios";

import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";

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
        const response = await axios.get(`${apiUrl}`);
        return await response.data;
    }

    // Add task
    const addTask = async (task) => {
        const response = await axios.post(`${apiUrl}`, task);
        setTasks([...tasks, response.data]);
    }

    // Delete task
    const deleteTask = async (id) => {
        await axios.delete(`${apiUrl}/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const response = await axios.get(`${apiUrl}/${id}`);
        return await response.data;
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const response = await axios.put(`${apiUrl}/${id}`, updatedTask);

        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, reminder: response.data.reminder} : task
            )
        )
    }

    return (
        <Router>
            <div className="container">
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
                <Route path={'/'} exact render={(props) => (
                    <>
                        {
                            showAddTask && <AddTask onAdd={addTask}/>
                        }
                        {
                            tasks.length > 0 ?
                                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
                                ('No tasks to show.')
                        }
                    </>
                )
                }/>
                <Route path={'/about'} component={About}/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
