import React, { useState } from 'react'
import { Form, Input } from 'semantic-ui-react';

export default function GoalInput({ addGoal, goalPoints, setGoalPoints }) {
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       addGoal(goal);
       setGoal('');
    }

    return (
        <Form classname="goal__form" onSubmit={handleSubmit}>
            <Form.Field>
                <Form.Group>

                    <Input
                        icon='plus'
                        iconPosition='left'
                        type="text"
                        name="goal"
                        value={goal}
                        placeholder="Add Weekly Goal"
                        onChange={e => setGoal(e.target.value)}
                    />

                    <Form.Button type="submit">Add Goal</Form.Button>
                </Form.Group>
            </Form.Field>
        </Form>
    )
}