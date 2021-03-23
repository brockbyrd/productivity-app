import './App.css';
import { Grid, Container } from 'semantic-ui-react';
import TodoContainer from './containers/TodoContainer'
import GoalsContainer from './containers/GoalsContainer'
import RewardsContainer from './containers/RewardsContainer'

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Grid columns={3} divided>
          <Grid.Row>
            Decoration
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <GoalsContainer />
            </Grid.Column>
            <Grid.Column>
              <TodoContainer />
            </Grid.Column>
            <Grid.Column>
              <RewardsContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
