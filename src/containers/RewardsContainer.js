import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import RewardList from '../components/RewardList'
import RewardInput from '../components/RewardInput'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'

export default function RewardsContainer() {
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
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='gem outline'/>
                            <Header.Content>Reward</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <RewardInput addReward={addReward} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <RewardList rewards={rewards} onRemove={handleRemove} />
        </Container>
    )
}
