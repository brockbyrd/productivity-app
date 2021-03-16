import React from 'react'

export default function RewardItem(props) {
    const rewards = props.rewards

    return (
        <ul>
            {rewards.map((reward) =>
                <>
                <li>{reward}</li>
                </>
            )}
        </ul>
    )
}
