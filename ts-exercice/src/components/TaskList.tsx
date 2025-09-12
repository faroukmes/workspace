import type { TaskI } from "../types/task";
import TaskItem from "./TaskItem";

type Props = {
    tasks: TaskI[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function TaskList({ onDelete, onToggle, tasks }: Props) {
    return tasks.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    ));
}
