import React from 'react'
import { List, Button } from 'semantic-ui-react'

export default function RewardList(props) {
    const rewards = props.rewards

    return (
        <List>
            {rewards.map((reward) =>
                <>
                <List.Item>{reward}<Button>Redeem</Button></List.Item>
                </>
            )}
        </List>
    )
}
