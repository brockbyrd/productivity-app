import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import { Button, List, Icon } from 'semantic-ui-react'

export default function GoalItem({ goal, points, setOverallPoints, overallPoints, handleRemove, id }) {
    const [complete, setComplete] = useStickyState(false, 'complete')

    function handleComplete(goal){
        setComplete(!complete)
        if (complete === false)
            setOverallPoints(overallPoints + points)
    }

        return (
            <List.Item style={{ textDecoration: complete && 'line-through'}}>
               {goal}
               <List.Content floated='right' verticalAlign='middle'>
                <Icon name='star' style={{ color: 'gold' }}/>{points}
                   <Button attached='left' onClick={() => handleComplete(goal)}>Complete</Button>
                   <Button attached='right' onClick={() => handleRemove(id)}>Clear</Button>
               </List.Content>
            </List.Item>
        )
}
