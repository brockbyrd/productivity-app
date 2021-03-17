import React from 'react'
import { List } from 'semantic-ui-react'

export default function RewardItem(props) {
    const rewards = props.rewards

    return (
        <List>
            {rewards.map((reward) =>
                <>
                <List.Item>{reward}</List.Item>
                </>
            )}
        </List>
    )
}
