import { createSlice, current } from "@reduxjs/toolkit";
import questions from "../../data/questions";
const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        questions: questions,
        current: 0,
        started: false,
        finished: false,
        title: "One piece Quiz",
        description: "test your knowledge of eichiro oda",
        total: 0,
        cover: "https://api.triviacreator.com/v1/imgs/quiz/One%20Piece%20quiz%20Thumbnail%20(2)-fdc09b23-a995-4aee-8e32-aab4492f0918.png",
        answers: [],
    },
    reducers: {
        startQuiz: (state, action) => {
            state.started = true;
        },
        nextQuestion: (state) => {
            if (state.current < state.questions.length - 1) {
                state.current++;
            } else {
                state.finished = true;
            }
        },
        previousQuestion: (state) => {
            if (state.current > 0) {
                state.current--;
            }
        },
        restart: (state) => {
            state.current = 0;
            state.finished = false;
            state.started = false;
        },
        selectAnswer: (state, action) => {
            const indexAnswer = action.payload;
            const currentQuestion = state.questions[state.current];
            if (state.answers[state.current] === undefined) {
                state.answers[state.current] = indexAnswer;
                if (currentQuestion.correctAnswer === indexAnswer) {
                    state.total += currentQuestion.point;
                }
            }
        },
        /* setNewQuiz: (state, action) => {
            const newQuiz = action.payload;
            state.questions = newQuiz.questions;
            state.title = newQuiz.title;
            state.description = newQuiz.description;
            state.current = 0;
            state.finished = false;
            state.started = false;
        }, */
    },
});
export const {
    startQuiz,
    previousQuestion,
    nextQuestion,
    restart,
    selectAnswer,
} = quizSlice.actions;
export default quizSlice.reducer;
