import React from 'react'
import useStickyState from '../customHooks/useStickyState'
import GoalInput from '../components/GoalInput'
import GoalList from '../components/GoalList'

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
        <div className="goals__list">
            <h1>Weekly Goals</h1>
            <GoalInput addGoal={addGoal} />
            <GoalList goals={goals} onRemove={handleRemove} />
        </div>
    )
}
