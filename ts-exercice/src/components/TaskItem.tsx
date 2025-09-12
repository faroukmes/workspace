import React from "react";
import type { TaskI } from "../types/task";

type Props = {
    task: TaskI;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};
const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            >
                {task.title}
            </span>
            <button onClick={() => onDelete(task.id)}>delete</button>
        </div>
    );
};
export default TaskItem;
