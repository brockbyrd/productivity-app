import React, { useState } from 'react'
import { Form, Input, Button, Rating } from 'semantic-ui-react'

export default function TodoInput({ onNewTodo }) {
    const [content, setContent] = useState('');
    const [points, setPoints] = useState(5);

    return (
        <Form className="todo__form">
            <Form.Field>
                <Input
                    icon='plus'
                    iconPosition='left'
                    type="text"
                    name="todo"
                    value={content}
                    placeholder="Add Daily Todo"
                    onChange={e => setContent(e.target.value)} />
            </Form.Field>

            <Form.Field>
                <p>{points}/{5}</p>
                <Rating
                    icon='star'
                    rating={points}
                    maxRating={5}
                    onRate={(_, data) => {
                        setPoints(data.rating)
                    }}
                />
            </Form.Field>

            <Form.Field>
            <Button
                type="submit"
                value="Add Todo"
                onClick={async () =>{
                    const todo = { content, points };
                    const response = await fetch("/add_todo", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(todo)
                        })

                        if (response.ok){
                            console.log(todo.id)
                            onNewTodo(todo);
                            setContent('');
                            setPoints(5);
                        }
                    }}>
                    Add Todo</Button>
            </Form.Field>
        </Form>
    )
}
