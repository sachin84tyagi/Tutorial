import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, delteTodo, toggleCompleted, setFilter, selectTodos, selectFilter, filteredTodos } from '../../redux/slices/todoSlice'

const Todo = () => {
    const todoListLength = useSelector((state) => state.todos.data.length)
    const todoState = useSelector((state) => state.todos)

    const filteredData = filteredTodos(todoState)

    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            id: todoListLength + 1,
            name: todo,
            status: false
        }
        dispatch(addTodo(payload))
    }

    const handleDelete = (id) => {
        dispatch(delteTodo(id))
    }

    const handleComplete = (id, status) => {
        const payload = {
            id: id,
            status: status
        }
        dispatch(toggleCompleted(payload))
    }

    const onSelectOption = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            <select onChange={onSelectOption}>
                <option value="-1">All</option>
                <option value="1">Completed</option>
                <option value="2">Pending</option>
            </select>
        </div>

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>



                    {filteredData && filteredData.map((val, key) => (

                        <tr key={key + 1}>
                            <th scope="row">{key + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.status ? 'Completed' : 'Pending'}</td>
                            <td>
                                <button onClick={() => handleComplete(val.id, val.status)}>{val.status ? 'Pending' : 'Complete'}</button> &nbsp;
                                <button onClick={() => handleDelete(val.id)}>Delete</button>

                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    </>);
}

export default Todo;