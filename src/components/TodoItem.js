import React from 'react'

export default function TodoItem(props) {
    const todos = props.todos
    const removeTodo = props.removeTodo

    const handleClick = (id) => {
        removeTodo(id)
    }

    return (
        <ul>
            {todos.map((todo) =>
            <>
                <li key={todo.id}>{todo}<button onClick={() => handleClick(todo.id)}>Complete</button></li>
            </>
            )}
        </ul>
    )
}
