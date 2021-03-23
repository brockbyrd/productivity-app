import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

export default class RewardItem extends Component {
    render(){
        const reward = this.props.reward
        const onRemove = this.props.onRemove
        return(
            <List.Item>
                {reward}
                <List.Content floated='right' verticalAlign='middle'>
                    <Button attached='left'>Complete</Button>
                    <Button attached='right' onClick={() => onRemove(reward)}>Clear</Button>
                </List.Content>
            </List.Item>
        )
    }
}