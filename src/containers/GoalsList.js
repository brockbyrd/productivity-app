import React, { useState } from 'react'
import GoalInput from '../components/GoalInput'
import GoalItem from '../components/GoalItem'

export default function GoalsList() {
    const [goals, setGoals ] = useState([])
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
