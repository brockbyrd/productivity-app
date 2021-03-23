import React, { useState } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default function TodoInput({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
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
                        value={todo}
                        placeholder="Add Daily Todo"
                        onChange={e => setTodo(e.target.value)} />
                    <Form.Button type="submit" value="Add Todo">Add Todo</Form.Button>
                </Form.Group>
            </Form.Field>
        </Form>
    )
}
