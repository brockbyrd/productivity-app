import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        let newTodo = [...todos, todo];
        setTodos(newTodo)
    }

    const removeTodo = (id) => {
        const todoRemove = todos.filter((todo) => todo.id !== id);

        setTodos(todoRemove);
    }

    return (
        <div className="todos__list">
            <h1>Daily Todos</h1>
            <TodoInput addTodo={addTodo} />
            <TodoItem todos={todos} removeTodo={removeTodo} />
        </div>
    )
}
