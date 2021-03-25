import './App.css';
import useStickyState from './customHooks/useStickyState'
import { Grid } from 'semantic-ui-react';
import TodoContainer from './containers/TodoContainer'
import GoalsContainer from './containers/GoalsContainer'
import RewardsContainer from './containers/RewardsContainer'
import DecorationContainer from './containers/DecorationContainer'

function App() {
  const [points, setPoints] = useStickyState(0, 'points')

  return (
    <div className="app">
        <Grid columns={1} divided='vertically'>
          <Grid.Row>
            <DecorationContainer points={points} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>
              <GoalsContainer setPoints={setPoints} points={points} />
            </Grid.Column>

            <Grid.Column>
              <TodoContainer setPoints={setPoints} points={points} />
            </Grid.Column>

            <Grid.Column>
              <RewardsContainer setPoints={setPoints} points={points} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
