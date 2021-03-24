import React from 'react'
import useStickyState from '../customHooks/useStickyState';
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import { Grid, Header, Icon, Container } from 'semantic-ui-react';

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
        <Container className="todos__list">
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1'>
                            <Icon name='pencil'/>
                            <Header.Content>Daily Todos</Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <TodoInput addTodo={addTodo} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

                <Grid.Row>
                    <TodoList todos={todos} onRemove={handleRemove} />
                </Grid.Row>

        </Container>
    )
}
