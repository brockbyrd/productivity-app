import React from 'react'
import GoalItem from './GoalItem'
import { List } from 'semantic-ui-react'

export default function GoalList({ goals, onRemove }) {
    return (
        <List size="huge" divided verticalAlign='middle'>
            {goals.map((goal) =>
                <>
                    <GoalItem key={goal.id} goal={goal} onRemove={onRemove} />
                </>
            )}
        </List>
    )
}
