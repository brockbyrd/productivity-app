import React from 'react'
import useStickyState from '../customHooks/useStickyState';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { Grid } from 'semantic-ui-react';

export default function TodoContainer() {
    const [todos, setTodos] = useStickyState([], 'todos')

    const addTodo = todo => {
        let newTodo = [...todos, todo];
        setTodos(newTodo)
    }

    function handleRemove(todo) {
        setTodos(todos.filter(t => t !== todo))
    }

    return (
        <div className="todos__list">
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Daily Todos</h1>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <TodoInput addTodo={addTodo} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <TodoList todos={todos} onRemove={handleRemove} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
