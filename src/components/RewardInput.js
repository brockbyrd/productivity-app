import React, { useState } from 'react'
import { Form, Input } from 'semantic-ui-react';

export default function RewardInput({ addReward }) {
        const [reward, setReward] = useState('');

        const handleSubmit = (e) => {
           e.preventDefault();
           addReward([reward]);
           setReward('');
        }

        return (
            <Form classname="reward__form" onSubmit={handleSubmit}>
                <Form.Field>
                    <Form.Group>
                    <Input
                        icon='plus'
                        iconPosition='left'
                        type="text"
                        name="reward"
                        value={reward}
                        placeholder="Rewards"
                        onChange={e => setReward(e.target.value)} />
                    <Form.Button type="submit">Add Reward</Form.Button>
                    </Form.Group>
                </Form.Field>
            </Form>
        )
}
