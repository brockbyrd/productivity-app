import React from 'react'
import useStickyState from '../customHooks/useStickyState';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

export default function TodoContainer() {
    const [todos, setTodos] = useStickyState([], 'todos')

    const addTodo = todo => {
        let newTodo = [...todos, todo];
        setTodos(newTodo)
    }

    function handleRemove(id) {
        const todoRemove = todos.filter((todo) => todo.id !== id);

        setTodos(todoRemove);
    }

    return (
        <div className="todos__list">
            <h1>Daily Todos</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} onRemove={handleRemove} />
        </div>
    )
}
