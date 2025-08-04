import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm"
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {

    const todos = useSelector((state) => (
        state.todos
    ))
    const dispatch = useDispatch();

    let deleteTask = (id) => {
        dispatch(deleteTodo(id))
    }

    let done = (id) => {
        dispatch(markAsDone(id))
    }

    return (
        <>

            <AddForm />

            <h1>Todo App</h1>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                                {todo.task}</span>
                            &nbsp; &nbsp;  &nbsp; &nbsp;
                            <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            &nbsp; &nbsp;  &nbsp; &nbsp;
                            <button onClick={() => done(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}