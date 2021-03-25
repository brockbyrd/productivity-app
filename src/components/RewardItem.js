import React from 'react';
import { Button, List } from 'semantic-ui-react';

export default function RewardItem({ reward, onRemove, points, setPoints}) {

    function onRedeem(){
        if(points >= 25)
            setPoints(points - 25)
        else
            alert(`You don't have enough points to redeem this reward! You need ${25 - points} more points to redeem!`)
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