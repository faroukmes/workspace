class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        this.currentFilter = "all";
        this.initializeElements();
        this.bindEvents();
        this.render();
    }

    initializeElements() {
        this.taskInput = document.getElementById("taskInput");
        this.addTaskBtn = document.getElementById("addTaskBtn");
        this.taskList = document.getElementById("taskList");
        this.taskCount = document.getElementById("taskCount");
        this.clearCompletedBtn = document.getElementById("clearCompleted");
        this.filterBtns = document.querySelectorAll(".filter-btn");
    }

    bindEvents() {
        this.addTaskBtn.addEventListener("click", () => this.addTask());
        this.taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTask();
        });
        this.clearCompletedBtn.addEventListener("click", () =>
            this.clearCompleted()
        );

        this.filterBtns.forEach((btn) => {
            btn.addEventListener("click", (e) =>
                this.setFilter(e.target.dataset.filter)
            );
        });
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (text === "") return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        this.tasks.unshift(newTask);
        this.taskInput.value = "";
        this.save();
        this.render();
    }

    toggleTask(id) {
        this.tasks = this.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.save();
        this.render();
    }

    editTask(id, newText) {
        if (newText.trim() === "") {
            this.deleteTask(id);
            return;
        }

        this.tasks = this.tasks.map((task) =>
            task.id === id ? { ...task, text: newText.trim() } : task
        );
        this.save();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.save();
        this.render();
    }

    clearCompleted() {
        this.tasks = this.tasks.filter((task) => !task.completed);
        this.save();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;

        this.filterBtns.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.filter === filter);
        });

        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case "active":
                return this.tasks.filter((task) => !task.completed);
            case "completed":
                return this.tasks.filter((task) => task.completed);
            default:
                return this.tasks;
        }
    }

    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    render() {
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            this.taskList.innerHTML = `
                <div class="empty-state">
                    <h3>No tasks found</h3>
                    <p>${
                        this.currentFilter === "all"
                            ? "Add your first task to get started!"
                            : this.currentFilter === "active"
                            ? "All tasks are completed!"
                            : "No completed tasks yet!"
                    }</p>
                </div>
            `;
        } else {
            this.taskList.innerHTML = filteredTasks
                .map(
                    (task) => `
                <li class="task-item ${
                    task.completed ? "completed" : ""
                }" data-id="${task.id}">
                    <input type="checkbox" class="task-checkbox" ${
                        task.completed ? "checked" : ""
                    }>
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <div class="task-actions">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </li>
            `
                )
                .join("");

            this.attachTaskEvents();
        }

        this.updateStats();
    }

    attachTaskEvents() {
        document.querySelectorAll(".task-item").forEach((item) => {
            const id = parseInt(item.dataset.id);
            const checkbox = item.querySelector(".task-checkbox");
            const editBtn = item.querySelector(".edit-btn");
            const deleteBtn = item.querySelector(".delete-btn");
            const taskText = item.querySelector(".task-text");

            checkbox.addEventListener("change", () => this.toggleTask(id));
            deleteBtn.addEventListener("click", () => this.deleteTask(id));

            editBtn.addEventListener("click", () => {
                const currentText = taskText.textContent;
                const newText = prompt("Edit your task:", currentText);
                if (newText !== null) {
                    this.editTask(id, newText);
                }
            });
        });
    }

    updateStats() {
        const activeTasks = this.tasks.filter((task) => !task.completed).length;
        const totalTasks = this.tasks.length;
        this.taskCount.textContent = `${activeTasks} of ${totalTasks} tasks left`;
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new TodoApp();
});
