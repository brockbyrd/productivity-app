import React from 'react'

export default function TodoInput() {
    return (
        <div className="todo__input">
            <label for="Todo">Todo: </label>
            <input type="text" name="todo" placeholder="Todo"/>
            <input type="submit" />
        </div>
    )
}
