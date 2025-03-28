import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, setTasks, toggleComplete, deleteTask }) {

    const moveTask = (dragIndex, hoverIndex) => {
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(dragIndex, 1);
        updatedTasks.splice(hoverIndex, 0, draggedTask);
        setTasks(updatedTasks);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="space-y-2">
                {tasks.map((task, index) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        index={index}
                        moveTask={moveTask}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </DndProvider>
    );
}