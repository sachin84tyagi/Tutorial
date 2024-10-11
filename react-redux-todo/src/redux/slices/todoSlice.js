import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    data: [
        { id: 1, name: 'Play game', status: true },
        { id: 2, name: 'Reading a book', status: false },
        { id: 3, name: 'Solve the problem', status: false },
        { id: 3, name: 'Do exercise', status: true }
    ],
    filter: "-1"
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload)
        },
        delteTodo: (state, action) => {
            state.data = state.data.filter((todo) => todo.id != action.payload)
        },
        toggleCompleted: (state, action) => {
            const index = state.data.findIndex((todo) => todo.id === action.payload.id);
            state.data[index].status = !action.payload.status
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTodo, delteTodo, toggleCompleted, setFilter } = todoSlice.actions

export default todoSlice.reducer

export const selectTodos = (state) => state.data
export const selectFilter = (state) => state.filter

export const filteredTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
    switch (filter) {
        case '1':
            return todos.filter((todo) => todo.status == true)

        case '2':
            return todos.filter((todo) => todo.status == false)

        default:
            return todos
    }
})
