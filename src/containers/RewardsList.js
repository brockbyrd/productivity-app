import React, { useState } from 'react'
import RewardItem from '../components/RewardItem'
import RewardInput from '../components/RewardInput'

export default function RewardsList() {
    const [rewards, setRewards] = useState([])

    return (
        <div className="rewards__list">
            <RewardInput />
            <RewardItem />
        </div>
    )
}
