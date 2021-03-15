import React from 'react'
import GoalInput from '../components/GoalInput'
import GoalItem from '../components/GoalItem'

export default function GoalsList() {
    return (
        <div className="goals__list">
            <h1>Weekly Goals</h1>
            <GoalInput />
            <GoalItem />
        </div>
    )
}
