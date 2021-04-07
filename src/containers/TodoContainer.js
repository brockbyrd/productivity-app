import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'
import { Grid, Header, Icon, Container, List } from 'semantic-ui-react';

export default function TodoContainer({ points, setPoints}) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("/todos").then(response =>
            response.json().then(data => {
                setTodos(data.todos);
            })
        );
    }, []);

    console.log(todos)

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
                            <Icon name='sun' style={{ color: 'white' }} />
                            <Header.Content style={{ color: 'white' }}>Daily Todos</Header.Content>
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
                    <List size="huge" divided veritcalAlign='middle'>
                    {todos.map((todo) => (
                        <>
                            <TodoItem key={todo.id} todo={todo.content} points={todo.points} onRemove={handleRemove} setPoints={setPoints} />
                        </>
                    ))}
                    </List>
                </Grid.Row>

        </Container>
    )
}
