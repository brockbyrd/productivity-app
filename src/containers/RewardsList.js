import React, { useState } from 'react'
import RewardItem from '../components/RewardItem'
import RewardInput from '../components/RewardInput'

export default function RewardsList() {
    const [rewards, setRewards] = useState([])

    const addReward = reward => {
        let newReward = [...rewards, reward];
        setRewards(newReward)
    }

    return (
        <div className="rewards__list">
            <h1>Rewards</h1>
            <RewardInput addReward={addReward} />
            <RewardItem rewards={rewards}/>
        </div>
    )
}
