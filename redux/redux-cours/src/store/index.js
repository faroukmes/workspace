import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quiz";
const store = configureStore({
    reducer: {
        quiz: quizSlice,
    },
});
export default store;
