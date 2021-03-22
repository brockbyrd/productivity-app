import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class GoalItem extends Component {
    render() {
        const goal = this.props.goal
        const onRemove = this.props.onRemove
        return (
            <li>
               {goal}
               <Button attached='left' onClick={() => onRemove(goal)}>Complete</Button>
               <Button attached='right'>Clear</Button>
            </li>
        )
    }
}
