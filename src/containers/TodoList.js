import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
    const [todos, setTodos] = useState(["Do the dishes", "Take out the trash", "Sweep the house", "Wipe the table"])
    const addTodo = todo => {
        let newTodo = [...todos, todo];
        setTodos(newTodo)
    }

    return (
        <div className="todos__list">
            <h1>Daily Todos</h1>
            <TodoInput addTodo={addTodo} />
            <TodoItem todos={todos} />
        </div>
    )
}
