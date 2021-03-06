import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'
import { Grid, Header, Icon, Container, List } from 'semantic-ui-react';

export default function TodoContainer({ overallPoints, setOverallPoints}) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("/todos").then(response =>
            response.json().then(data => {
                setTodos(data.todos);
            })
        );
    }, [todos.length]);

    function handleRemove(id)  {
        fetch('/todo/'+id, {
            method: 'DELETE',
            header: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
        }
        })
        setTodos(todos.filter(todo => todo.id !== id))
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
                        <TodoInput onNewTodo={todo => setTodos(currentTodos => [...currentTodos, todo])} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

                <Grid.Row>
                    <List size="huge" divided verticalAlign='middle'>
                    {todos.map((todo) => (
                        <>
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                todo={todo.content}
                                points={todo.points}
                                overallPoints={overallPoints}
                                setOverallPoints={setOverallPoints}
                                handleRemove={handleRemove}
                                />
                        </>
                    ))}
                    </List>
                </Grid.Row>

        </Container>
    )
}
