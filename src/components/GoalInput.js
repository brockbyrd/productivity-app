import React, { useState } from 'react'
import { Form, Input, Button, Rating } from 'semantic-ui-react';

export default function GoalInput({ onNewGoal }) {
    const [content, setContent] = useState('');
    const [points, setPoints] = useState(10)

    return (
        <Form classname="goal__form">
            <Form.Field>
                <Input
                    icon='plus'
                    iconPosition='left'
                    type="text"
                    name="goal"
                    value={content}
                    placeholder="Add Weekly Goal"
                    onChange={e => setContent(e.target.value)}
                />
            </Form.Field>

            <Form.Field>
                <Rating
                    icon='star'
                    rating={points}
                    maxRating={10}
                    onRate={(_, data) => {
                        setPoints(data.rating)
                    }}
                />
            </Form.Field>

            <Form.Field>
                <Button
                type="submit"
                value="Add Goal"
                onClick={async () => {
                    const goal = { content, points };
                    const response = await fetch("/add_goal", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(goal)
                    });

                    if(response.ok){
                        console.log("it worked")
                        onNewGoal(goal);
                        setContent('');
                        setPoints(10);
                    }
                }}>Add Goal</Button>
            </Form.Field>
        </Form>
    )
}