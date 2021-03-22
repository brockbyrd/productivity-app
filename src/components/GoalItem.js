import React, { Component } from 'react'

export default class GoalItem extends Component {
    render() {
        const goal = this.props.goal
        const onRemove = this.props.onRemove
        return (
            <li>
               {goal}
               <button onClick={() => onRemove(goal)}>Complete</button>
            </li>
        )
    }
}
