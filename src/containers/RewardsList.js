import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import RewardItem from '../components/RewardItem'
import RewardInput from '../components/RewardInput'

export default function RewardsList() {
    const [rewards, setRewards] = useStickyState([], 'rewards')

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
