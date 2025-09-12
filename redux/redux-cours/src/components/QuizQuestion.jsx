import React from "react";
import { useDispatch } from "react-redux";
import {
    nextQuestion,
    previousQuestion,
    selectAnswer,
} from "../store/slices/quiz";

export default function QuizQuestion({
    question,
    suggestions,
    index,
    correctAnswer,
    currentAnswer,
    numberOfQuestions,
}) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="card bg-base-200 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <h3>
                        Question {index + 1}/{numberOfQuestions}
                    </h3>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {question} </h2>

                    <div className="card-actions w-full">
                        {suggestions.map((s, i) => (
                            <button
                                onClick={() => {
                                    dispatch(selectAnswer(i));
                                }}
                                key={i}
                                className={`btn w-full btn-outline ${
                                    currentAnswer === undefined ||
                                    currentAnswer !== i
                                        ? ""
                                        : currentAnswer === correctAnswer
                                        ? "btn-success"
                                        : "btn-error"
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <button
                    className="btn btn-secondary"
                    disabled={index <= 0}
                    onClick={() => {
                        dispatch(previousQuestion());
                    }}
                >
                    Previous
                </button>
                <button
                    className="btn btn-primary"
                    disabled={index >= numberOfQuestions}
                    onClick={() => {
                        dispatch(nextQuestion());
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
}
