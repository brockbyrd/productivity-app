import './App.css';
import { Grid } from 'semantic-ui-react';
import TodoContainer from './containers/TodoContainer'
import GoalsContainer from './containers/GoalsContainer'
import RewardsContainer from './containers/RewardsContainer'

function App() {
  return (
    <div className="app">
        <Grid columns={1} divided='vertically'>
          <Grid.Row>
            Decoration
          </Grid.Row>

          <Grid.Row columns={3}>
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
    </div>
  );
}

export default App;
