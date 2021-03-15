import React, { useState } from 'react'

export default function TodoInput({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo([todo]);
        setTodo('');
    }

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <label for="todo">Todo: </label>
            <input type="text" name="todo" value={todo} placeholder="Daily Todo" onChange={e => setTodo(e.target.value)} />
            <input type="submit" value="Add Todo" />
        </form>
    )
}
