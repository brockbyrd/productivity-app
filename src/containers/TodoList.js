import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
    const [todos, setTodos] = useState(["Do the dishes", "Take out the trash", "Sweep the house", "Wipe the table"])

    return (
        <>
            <TodoInput setTodos={setTodos} />
            <TodoItem todos={todos} />
        </>
    )
}
