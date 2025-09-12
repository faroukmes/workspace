import React from "react";
import { useSelector } from "react-redux";

export default function FinishingQuiz() {
    const quiz = useSelector((store) => store.quiz);

    return (
        <div className="card bg-base-200 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img src={quiz.cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {quiz.title} </h2>
                <p>you have successfully finished the quiz</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Restart</button>
                </div>
            </div>
        </div>
    );
}
