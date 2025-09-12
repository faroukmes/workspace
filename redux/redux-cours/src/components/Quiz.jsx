import React from "react";
import { useSelector } from "react-redux";
import StartingQuiz from "./StartingQuiz";
import FinishingQuiz from "./FinishingQuiz";
import QuizQuestion from "./QuizQuestion";

export default function Quiz() {
    const quiz = useSelector((store) => store.quiz);
    const currentQuestion = quiz.questions[quiz.current];
    return (
        <div className="flex-1 flex flex-col justify-center items-center p-4 gap-4">
            {!quiz.started ? (
                <StartingQuiz />
            ) : !quiz.finished ? (
                <QuizQuestion
                    index={quiz.current}
                    question={currentQuestion.question}
                    currentAnswer={quiz.answers[quiz.current]}
                    correctAnswer={currentQuestion.correctAnswer}
                    suggestions={currentQuestion.suggestions}
                    numberOfQuestions={quiz.questions.length}
                />
            ) : (
                <FinishingQuiz />
            )}
        </div>
    );
}
