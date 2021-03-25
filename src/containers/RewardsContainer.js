import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import RewardList from '../components/RewardList'
import RewardInput from '../components/RewardInput'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'

export default function RewardsContainer({ points, setPoints }) {
    const [rewards, setRewards] = useStickyState([], 'rewards')

    const addReward = reward => {
        let newReward = [...rewards, reward];
        setRewards(newReward)
    }

    function handleRemove(reward){
        setRewards(rewards.filter(r => r !== reward))
    }

    return (
        <Container className="rewards__list">
            <Grid centered columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='star' style={{ color: 'white' }}/>
                            <Header.Content style={{ color: 'white' }}>Rewards</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <RewardInput addReward={addReward} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid.Row>
                <RewardList rewards={rewards} onRemove={handleRemove} points={points} setPoints={setPoints} />
            </Grid.Row>
        </Container>
    )
}
