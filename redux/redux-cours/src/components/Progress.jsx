import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

export default function Progress() {
    const quiz = useSelector((store) => store.quiz);
    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="w-96 h-96">
                <CircularProgressbar
                    value={quiz.total}
                    text={`${quiz.total}%`}
                />
            </div>
        </div>
    );
}
