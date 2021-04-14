import React, { useState, useEffect } from 'react'
import GoalInput from '../components/GoalInput'
import GoalItem from '../components/GoalItem'
import { Grid, Header, Icon, Container, List } from 'semantic-ui-react';

export default function GoalContainer({ setPoints, points }) {
    const [goals, setGoals ] = useState([])

    useEffect(() => {
        fetch("/goals").then(response =>
            response.json().then(data => {
                setGoals(data.goals)
            }))
    }, []);

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
                        <GoalInput onNewGoal={goal => setGoals(currentGoals => [goal, ...currentGoals])} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid.Row>
                <List>
                    {goals.map((goal) =>
                    <>
                        <GoalItem key={goal.id} goal={goal.content} points={goal.points} setPoints={setPoints} />
                    </>
                    )}
                </List>
            </Grid.Row>
        </Container>
    )
}
