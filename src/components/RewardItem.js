import React from 'react';
import { Button, List } from 'semantic-ui-react';

export default function RewardItem({ reward, onRemove, points, setPoints}) {

    function onRedeem(){
        setPoints(points - 10)
    }
        return(
            <List.Item>
                {reward}
                <List.Content floated='right' verticalAlign='middle'>
                    <Button attached='left' onClick={() => onRedeem()}>Redeem</Button>
                    <Button attached='right' onClick={() => onRemove(reward)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
}