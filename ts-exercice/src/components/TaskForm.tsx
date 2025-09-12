import React, { useState } from "react";

interface TaskFormProps {
    onAdd: (title: string) => void;
}
export function TaskForm({ onAdd }: TaskFormProps) {
    const [title, setTitle] = useState("");

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === "") return;
        onAdd(title);
        setTitle("");
    };
    return (
        <form action="" onSubmit={handlesubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
