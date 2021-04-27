import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import { Button, List } from 'semantic-ui-react'

export default function GoalItem({ goal, points, setPoints, handleRemove, id }) {
    const [complete, setComplete] = useStickyState(false, 'complete')

    function handleComplete(goal){
        setComplete(!complete)
        if (complete === false)
            setPoints(points + 20)
    }

        return (
            <List.Item style={{ textDecoration: complete && 'line-through'}}>
                {id} {goal} {points}
               <List.Content floated='right' verticalAlign='middle'>
                   <Button attached='left' onClick={() => handleComplete(goal)}>Complete</Button>
                   <Button attached='right' onClick={() => handleRemove(id)}>Clear</Button>
               </List.Content>
            </List.Item>
        )
}
