import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import GoalInput from '../components/GoalInput'
import GoalList from '../components/GoalList'
import { Grid, Header, Icon, Container } from 'semantic-ui-react';

export default function GoalContainer() {
    const [goals, setGoals ] = useStickyState([], 'goals')

    const addGoal = goal => {
        let newGoal = [...goals, goal];
        setGoals(newGoal)
    }

    function handleRemove(goal) {
        setGoals(goals.filter(g => g !== goal))
    }

    return (
        <Container fluid className="goals__container">
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='checkmark'/>
                            <Header.Content>Weekly Goals</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <GoalInput addGoal={addGoal} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered>
                    <GoalList goals={goals} onRemove={handleRemove} />
                </Grid.Row>
            </Grid>
        </Container>
    )
}
