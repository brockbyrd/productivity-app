import React, { useState } from 'react'

export default function GoalInput({ addGoal }) {
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       addGoal([goal]);
       setGoal('');
    }

    return (
        <form classname="goal__form" onSubmit={handleSubmit}>
            <label for="goal">Goal: </label>
            <input type="text" name="goal" value={goal} placeholder="Weekly Goal" onChange={e => setGoal(e.target.value)} />
            <input type="submit" value="Add Goal" />
        </form>
    )
}
