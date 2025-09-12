import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../store/slices/quiz";

export default function StartingQuiz() {
    const quiz = useSelector((store) => store.quiz);
    const dispatch = useDispatch();
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img src={quiz.cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {quiz.title} </h2>
                <p>{quiz.description}</p>
                <div className="card-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            dispatch(startQuiz());
                        }}
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
}
