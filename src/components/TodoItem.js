import React from 'react'

export default function TodoItem(props) {
    const todos = props.todos
    return (
        <ul>
            {todos.map((todo) =>
                todo
            )}
        </ul>
    )
}
