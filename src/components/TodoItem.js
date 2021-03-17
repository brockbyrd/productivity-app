import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const todo = this.props.todo
        const onRemove = this.props.onRemove
        return (
            <li>
                {todo}
                <button onClick={() => onRemove(todo.id)}>Complete</button>
            </li>
        )
    }
}

export default TodoItem
