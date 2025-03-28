import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";

export default function TaskItem({ task, index, moveTask, toggleComplete, deleteTask }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: "task",
        hover: (item) => {
            if (item.index !== index) {
                moveTask(item.index, index);
                item.index = index;
            }
        },
    }));

    return (
        <motion.div
            ref={(node) => drag(drop(node))}
            className={`flex justify-between items-center p-2 rounded shadow ${task.completed ? "bg-green-200" : "bg-white"} ${isDragging ? "opacity-50" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div>
                <h3 className={`font-semibold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
                <p>Priority: {task.priority} | Due: {task.dueDate}</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => toggleComplete(task.id)} className="bg-green-500 px-2 rounded text-white">Done</button>
                <button onClick={() => deleteTask(task.id)} className="bg-red-500 px-2 rounded text-white">Delete</button>
            </div>
        </motion.div>
    );
}