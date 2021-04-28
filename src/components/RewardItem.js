import React from 'react';
import { Button, List, Icon } from 'semantic-ui-react';

export default function RewardItem({ reward, points, setOverallPoints, overallPoints, handleRemove, id}) {

    function onRedeem(){
        if(overallPoints >= points)
            setOverallPoints(overallPoints - points)
        else
            alert(`You don't have enough points to redeem this reward! You need ${points - overallPoints} more points to redeem!`)
    }


        return(
            <List.Item>
                {reward}
                <List.Content floated='right' verticalAlign='middle'>
                    <Icon name='star' style={{ color: 'gold' }}/>{points}
                    <Button attached='left' onClick={() => onRedeem(reward)}>Redeem</Button>
                    <Button attached='right' onClick={() => handleRemove(id)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
}