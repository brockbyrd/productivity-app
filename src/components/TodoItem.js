import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'

class TodoItem extends Component {
    render() {
        const todo = this.props.todo
        const onRemove = this.props.onRemove
        return (
            <List.Item>
                {todo}
                <List.Content floated='right'>
                    <Button attached='left'>Complete</Button>
                    <Button attached='right' onClick={() => onRemove(todo)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
    }
}

export default TodoItem
