const redux = require("redux");
const { timerReducer } = require("./reducers/timmerReducers");

export const store = redux.createStore(timerReducer);
