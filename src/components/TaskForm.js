import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [task, setTask] = useState({ title: "", priority: "Low", dueDate: "" });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.title) return;
        addTask({ ...task, id: Date.now(), completed: false });
        setTask({ title: "", priority: "Low", dueDate: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
            <input className="p-2 border rounded" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" />
            <input className="p-2 border rounded" type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
            <select className="p-2 border rounded" name="priority" value={task.priority} onChange={handleChange}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add Task</button>
        </form>
    );
}