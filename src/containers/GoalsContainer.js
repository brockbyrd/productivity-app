import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import GoalInput from '../components/GoalInput'
import GoalItem from '../components/GoalItem'
import { Grid, Header, Icon, Container, List } from 'semantic-ui-react';

export default function GoalContainer({ setPoints, points }) {
    const [goals, setGoals ] = useStickyState([], 'goals')

    const addGoal = goal => {
        let newGoal = [...goals, goal];
        setGoals(newGoal)
    }

    function handleRemove(goal) {
        setGoals(goals.filter(g => g !== goal))
    }

    return (
        <Container className="goals__container">
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='moon' style={{ color: 'white' }}/>
                            <Header.Content style={{ color: 'white' }}>Weekly Goals</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <GoalInput addGoal={addGoal} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid.Row>
                <List>
                    {goals.map((goal) =>
                    <>
                        <GoalItem key={goal.id} goal={goal.content} onRemove={handleRemove} points={goal.points} setPoints={setPoints} />
                    </>
                    )}
                </List>
            </Grid.Row>
        </Container>
    )
}
