import { createSelector } from "@reduxjs/toolkit";

const state = {
    todos: [
        { id: 1, name: 'Make a coffee', status: false },
        { id: 2, name: 'Do Excersise', status: true },
        { id: 3, name: 'Attend the meeting', status: false },
        { id: 4, name: 'Buy the fruits', status: true },
    ],
    filter: "2"
}
// const selectMySum = createSelector(
//     stateItems,
//     stateCategory,
//     (state, i) => i,
//     (s, p, i) => s + p + i
// );
const props = {
    id: 2, name: 'Do Excersise', status: true
}
const selectTodos = state => state.todos

const selectCompletedTodos = createSelector([selectTodos], todos =>
    todos.filter(todo => todo.status === true)
)
console.log(selectCompletedTodos(state))

const selectCompletedTodoDescriptions = createSelector(
    [selectCompletedTodos],
    completedTodos => completedTodos.map(todo => todo.name)
)

console.log(selectCompletedTodoDescriptions(state))

export const getTodos = (state) => state.todos
export const getFilter = (state) => state.filter
//export const getTodoById = (state, props) => state.todos.filter((todo) => todo.id == props.id)
export const getTodoByIdV2 = createSelector([getTodos, (state, prop) => prop], (todos, prop) => todos.filter((todo) => todo.id == prop.id))

export const getFilterTodos = createSelector([getTodos, getFilter], (todos, filter) => {
    switch (filter) {
        case "1":
            return todos.filter((todo) => todo.status == false)

        case "2":
            return todos.filter((todo) => todo.status == true)

        default:
            return todos
    }
})
console.log(getFilterTodos(state))

//export const getSingleTodo = createSelector([getTodoById], (todos) => todos)
export const getSingleTodo2 = createSelector([getTodoByIdV2], (todos) => todos.map(todo => todo))
console.log(getSingleTodo2(state, props))

//console.log(getSingleTodo(state, props))


