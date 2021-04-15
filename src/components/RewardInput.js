import React, { useState } from 'react'
import { Form, Input, Rating, Button } from 'semantic-ui-react';

export default function RewardInput({ onNewReward }) {
        const [content, setContent] = useState('');
        const [points, setPoints] = useState(15);

        return (
            <Form classname="reward__form">
                <Form.Field>
                    <Input
                        icon='plus'
                        iconPosition='left'
                        type="text"
                        name="reward"
                        value={content}
                        placeholder="Rewards"
                        onChange={e => setContent(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <p>{points}/{15}</p>
                    <Rating
                        icon='star'
                        rating={points}
                        maxRating={15}
                        onRate={(_, data) => {
                            setPoints(data.rating)
                        }}
                    />
                </Form.Field>

                <Form.Field>
                    <Button
                        type="submit"
                        value="Add Reward"
                        onClick={async () => {
                            const reward = {content, points};
                            const response = await fetch("/add_reward", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(reward)
                            });

                            if (response.ok){
                                console.log("it worked")
                                onNewReward(reward);
                                setContent('');
                                setPoints(15);
                            }
                        }}>Add Reward</Button>
                </Form.Field>

            </Form>
        )
}
