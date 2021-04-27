import React from 'react';
import { Button, List } from 'semantic-ui-react';

export default function RewardItem({ reward, points, setPoints, handleRemove, id}) {

    function onRedeem(){
        if(points >= 25)
            setPoints(points - 25)
        else
            alert(`You don't have enough points to redeem this reward! You need ${25 - points} more points to redeem!`)
    }


        return(
            <List.Item>
                {id} {reward} {points}
                <List.Content floated='right' verticalAlign='middle'>
                    <Button attached='left' onClick={() => onRedeem(reward)}>Redeem</Button>
                    <Button attached='right' onClick={() => handleRemove(id)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
}