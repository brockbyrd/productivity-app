import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onRemove }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} onRemove={onRemove} />
            ))}
        </ul>
    )
}
