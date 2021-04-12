import React, { useState } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default function TodoInput({ addTodo }) {
    const [content, setContent] = useState('');
    const [points, setPoints] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { content };
        const response = fetch('/add_todo', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        if (response.ok){
            console.log("IT WORKED")
        }
    }

    return (
        <Form className="todo__form" onSubmit={handleSubmit}>
            <Form.Field>
                <Form.Group>
                    <Input
                        icon='plus'
                        iconPosition='left'
                        type="text"
                        name="todo"
                        value={content}
                        placeholder="Add Daily Todo"
                        onChange={e => setContent(e.target.value)} />
                    <Form.Button type="submit" value="Add Todo">Add Todo</Form.Button>
                </Form.Group>
            </Form.Field>
        </Form>
    )
}
