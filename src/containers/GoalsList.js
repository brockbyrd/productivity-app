import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import GoalInput from '../components/GoalInput'
import GoalItem from '../components/GoalItem'

export default function GoalsList() {
    const [goals, setGoals ] = useStickyState([], 'goals')
    const addGoal = goal => {
        let newGoal = [...goals, goal];
        setGoals(newGoal)
    }

    return (
        <div className="goals__list">
            <h1>Weekly Goals</h1>
            <GoalInput addGoal={addGoal} />
            <GoalItem goals={goals} />
        </div>
    )
}
