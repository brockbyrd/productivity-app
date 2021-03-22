import React from 'react'
import GoalItem from './GoalItem'

export default function GoalList({ goals, onRemove }) {
    return (
        <ul>
            {goals.map((goal) =>
            <>
                <GoalItem key={goal.id} goal={goal} onRemove={onRemove} />
            </>
            )}
        </ul>
    )
}
