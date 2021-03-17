import React from 'react'

export default function GoalList(props) {
    const goals = props.goals
    return (
        <ul>
            {goals.map((goal) =>
                <li>{goal}</li>
            )}
        </ul>
    )
}
