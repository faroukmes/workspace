import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import type { TaskI } from "./types/task";
import TaskList from "./components/TaskList";
import Filter from "./components/filter";

function App() {
    const [tasks, setTasks] = useState<TaskI[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            return JSON.parse(storedTasks);
        }
        return [];
    });
    const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        if (filter === "active") return !task.completed;
        return true; // Fallback
    });
    useEffect(() => {
        if (tasks.length === 0) {
            localStorage.removeItem("tasks");
            return;
        } else {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);
    return (
        <>
            <TaskForm
                onAdd={(title) => {
                    console.log("Task added:", title);
                    const newTask: TaskI = {
                        id: Date.now(),
                        title,
                        completed: false,
                    };
                    setTasks([...tasks, newTask]);
                }}
            />
            <div>
                <h2>Task List</h2>
            </div>
            <TaskList
                onDelete={(id) => {
                    const updatedTasks = tasks.filter((t) => t.id !== id);
                    setTasks(updatedTasks);
                }}
                onToggle={(id) => {
                    setTasks(
                        tasks.map((t) =>
                            t.id === id ? { ...t, completed: !t.completed } : t
                        )
                    );
                }}
                tasks={filteredTasks}
            />
            <Filter filter={filter} onChange={setFilter} />
        </>
    );
}

export default App;
