import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onRemove }) {

    return (
        <ul>
            {todos.map(({ todo, onRemove }) =>
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>
            )}
        </ul>
    )
}
