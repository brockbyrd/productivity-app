import React from 'react'
import TodoItem from './TodoItem'
import { List } from 'semantic-ui-react'

export default function TodoList({ todos, onRemove }) {
    return (
        <List size="huge" divided veritcalAlign='middle'>
            {todos.map((todo) => (
                <>
                    <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
                </>
            ))}
        </List>
    )
}
