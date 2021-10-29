import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const initialState = [
  {
    id: uuidv4(),
    task: "Fix login & register form design",
    createdDate: moment().format("MMMM Do YYYY, h:mm a").toString(),
    status: "idle",
    cansle: false,
    complate: true,
  },
  {
    id: uuidv4(),

    task: "Fix login & register form design",
    createdDate: moment().format("MMMM Do YYYY, h:mm a").toString(),
    status: "idle",
    cansle: true,
    complate: false,
  },
  {
    id: uuidv4(),

    task: "Fix login & register form design",
    createdDate: moment().format("MMMM Do YYYY, h:mm a").toString(),
    status: "idle",
    cansle: false,
    complate: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    remove(state, { payload: index }) {
      state.splice(index, 1);
    },
    patch(state, { payload: { index, task } }) {
      state[index].task = task;
      state[index].createdDate = moment()
        .format("MMMM Do YYYY, h:mm a")
        .toString();
    },
    cansleAction(state, { payload: { index, cansle } }) {
      state[index].cansle = cansle;
      state[index].createdDate = moment()
        .format("MMMM Do YYYY, h:mm a")
        .toString();
    },
    complateAction(state, { payload: { index, complate } }) {
      state[index].complate = complate;
      state[index].createdDate = moment()
        .format("MMMM Do YYYY, h:mm a")
        .toString();
    },
  },
});

export const { add, remove, patch, cansleAction, complateAction } =
  todosSlice.actions;

export const selectTodos = ({ todos }) => todos;

export default todosSlice.reducer;
