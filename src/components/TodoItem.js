import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class TodoItem extends Component {
    render() {
        const todo = this.props.todo
        const onRemove = this.props.onRemove
        return (
            <li>
                {todo}
                <Button attached='left' onClick={() => onRemove(todo)}>Complete</Button>
                <Button attached="right">Clear</Button>
            </li>
        )
    }
}

export default TodoItem
