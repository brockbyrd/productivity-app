import React from 'react'

export default function GoalItem(props) {
    const goals = props.goals
    return (
        <ul>
            {goals.map((goal) =>
                <li>{goal}</li>
            )}
        </ul>
    )
}
