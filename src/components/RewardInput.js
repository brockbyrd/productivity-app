import React, { useState } from 'react'

export default function RewardInput({ addReward }) {
        const [reward, setReward] = useState('');

        const handleSubmit = (e) => {
           e.preventDefault();
           addReward([reward]);
           setReward('');
        }

        return (
            <form classname="reward__form" onSubmit={handleSubmit}>
                <label for="reward">Reward: </label>
                <input type="text" name="reward" value={reward} placeholder="Rewards" onChange={e => setReward(e.target.value)} />
                <input type="submit" value="Add Reward" />
            </form>
        )
}
