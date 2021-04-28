import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import { Button, List } from 'semantic-ui-react'

export default function TodoItem ({ todo, overallPoints, setOverallPoints, points, handleRemove, id }) {
    const [complete, setComplete] = useStickyState(false, 'complete')

    function handleComplete(todo) {
        setComplete(!complete)
        if (complete === false)
            setOverallPoints(overallPoints + points)
    }



        return (
            <List.Item style={{ textDecoration: complete && 'line-through'}}>
                {id} {todo} {points}
                <List.Content floated='right'>
                    <Button attached='left' onClick={() => handleComplete(todo)}>Complete</Button>
                    <Button attached='right' onClick={() => handleRemove(id)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
    }
