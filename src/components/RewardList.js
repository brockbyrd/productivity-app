import React from 'react'
import RewardItem from './RewardItem'
import { List } from 'semantic-ui-react'

export default function RewardList({ rewards, onRemove, points, setPoints}) {

    return (
        <List size="huge" divided verticalAlign='middle'>
            {rewards.map((reward) =>
                <>
                    <RewardItem key={reward.id} reward={reward} onRemove={onRemove} points={points} setPoints={setPoints} />
                </>
            )}
        </List>
    )
}
