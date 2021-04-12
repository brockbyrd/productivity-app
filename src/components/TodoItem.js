import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import { Button, List } from 'semantic-ui-react'

export default function TodoItem ({ todo, onRemove, points, setPoints }) {
    const [complete, setComplete] = useStickyState(false, 'complete')

    function handleComplete(todo) {
        setComplete(!complete)
        if (complete === false)
            setPoints(points + 5)
    }

        return (
            <List.Item style={{ textDecoration: complete && 'line-through'}}>
                {todo} {points}
                <List.Content floated='right'>
                    <Button attached='left' onClick={() => handleComplete(todo)}>Complete</Button>
                    <Button attached='right' onClick={() => onRemove(todo)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
    }
