import React, { useEffect, useState } from 'react'
import RewardItem from '../components/RewardItem'
import RewardInput from '../components/RewardInput'
import { Container, Grid, Header, Icon, List } from 'semantic-ui-react'

export default function RewardsContainer({ points, setPoints }) {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        fetch("/rewards").then(response =>
            response.json().then(data => {
                setRewards(data.rewards);
            })
        )
    }, []);

    return (
        <Container className="rewards__list">
            <Grid centered columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='rocket' style={{ color: 'white' }}/>
                            <Header.Content style={{ color: 'white' }}>Rewards</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <RewardInput onNewReward={reward => setRewards(currentRewards => [reward, ...currentRewards])} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid.Row>
               <List size="huge" divided verticalAlign='middle'>
                {rewards.map((reward) =>
                    <>
                        <RewardItem key={reward.id} reward={reward.content} points={reward.points} setPoints={setPoints} />
                    </>
                )}
               </List>
            </Grid.Row>
        </Container>
    )
}
