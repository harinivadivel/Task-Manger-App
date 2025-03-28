import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterSort from "./components/FilterSort";
import { saveTasks, getTasks } from "./utils/localStorage";

function App() {
    const [tasks, setTasks] = useState(getTasks());
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("None");

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (task) => setTasks([...tasks, task]);
    const toggleComplete = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    const toggleDarkMode = () => document.body.classList.toggle("dark");

    const filteredTasks = tasks
        .filter(task => {
            if (filter === "All") return true;
            if (filter === "Pending") return !task.completed;
            if (filter === "Completed") return task.completed;
            return true;
        })
        .sort((a, b) => {
            if (sort === "Date") return new Date(a.dueDate) - new Date(b.dueDate);
            if (sort === "Priority") return a.priority.localeCompare(b.priority);
            return 0;
        });

    return (
        <div className="max-w-xl mx-auto p-4">
            <Header toggleDarkMode={toggleDarkMode} />
            <TaskForm addTask={addTask} />
            <FilterSort filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
            <TaskList tasks={filteredTasks} setTasks={setTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
}

export default App;