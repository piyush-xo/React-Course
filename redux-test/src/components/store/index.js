import { configureStore, createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: { answerStatus: false },
  reducers: {
    correctAnswer(state) {
      state.answerStatus = true;
    },
    incorrectAnswer(state) {
      state.answerStatus = false;
    },
  },
});

const store = configureStore({ reducer: {answerSlice: answerSlice.reducer} });

export const answerActions =  answerSlice.actions;
export default store;
