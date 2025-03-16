import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
    todos: [] as TodoItem[],
    counter: 0
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todoItem = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todoItem);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        adjust: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        }
    },
});
export const { addTodo, removeTodo, adjust } = todoSlice.actions;
export default todoSlice.reducer;
