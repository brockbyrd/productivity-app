import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'

export default class GoalItem extends Component {
    render() {
        const goal = this.props.goal
        const onRemove = this.props.onRemove
        return (
            <List.Item>
                {goal}
               <List.Content floated='right' verticalAlign='middle'>
                   <Button attached='left'>Complete</Button>
                   <Button attached='right' onClick={() => onRemove(goal)}>Clear</Button>
               </List.Content>
            </List.Item>
        )
    }
}
