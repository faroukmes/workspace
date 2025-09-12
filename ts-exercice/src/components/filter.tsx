type FilterValue = {
    filter: "all" | "completed" | "active";
    onChange: (value: "all" | "completed" | "active") => void;
};
export default function Filter({ filter, onChange }: FilterValue) {
    return (
        <div>
            <button
                onClick={() => onChange("all")}
                className={filter === "all" ? "active" : ""}
            >
                all
            </button>
            <button
                onClick={() => onChange("completed")}
                className={filter === "completed" ? "active" : ""}
            >
                completed
            </button>
            <button
                onClick={() => onChange("active")}
                className={filter === "active" ? "active" : ""}
            >
                active
            </button>
        </div>
    );
}
