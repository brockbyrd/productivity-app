import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import RewardList from '../components/RewardList'
import RewardInput from '../components/RewardInput'

export default function RewardsContainer() {
    const [rewards, setRewards] = useStickyState([], 'rewards')

    const addReward = reward => {
        let newReward = [...rewards, reward];
        setRewards(newReward)
    }

    return (
        <div className="rewards__list">
            <h1>Rewards</h1>
            <RewardInput addReward={addReward} />
            <RewardList rewards={rewards}/>
        </div>
    )
}
