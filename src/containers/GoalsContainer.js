import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import GoalInput from '../components/GoalInput'
import GoalList from '../components/GoalList'
import { Grid } from 'semantic-ui-react';

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
        <div className="goals__container">
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Weekly Goals</h1>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <GoalInput addGoal={addGoal} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <GoalList goals={goals} onRemove={handleRemove} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
