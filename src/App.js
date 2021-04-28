import './App.css';
import useStickyState from './customHooks/useStickyState'
import { Grid } from 'semantic-ui-react';
import TodoContainer from './containers/TodoContainer'
import GoalsContainer from './containers/GoalsContainer'
import RewardsContainer from './containers/RewardsContainer'
import Points from './components/Points'

function App() {
  const [overallPoints, setOverallPoints] = useStickyState(0, 'points')

  return (
    <div className="app">
        <Grid columns={4} verticalAlign='middle' centered>
          <Grid.Row centered>
            <h1 style={{ fontSize: '85px' }}>Productivity App</h1>
          </Grid.Row>

          <Grid.Row centered>
            <h4 style={{ fontSize: '30px' }}>The app that will help you stay on course!</h4>
          </Grid.Row>

          <Grid.Row centered>
            <Points overallPoints={overallPoints} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>
              <GoalsContainer setOverallPoints={setOverallPoints} overallPoints={overallPoints} />
            </Grid.Column>

            <Grid.Column>
              <TodoContainer setOverallPoints={setOverallPoints} overallPoints={overallPoints} />
            </Grid.Column>

            <Grid.Column>
              <RewardsContainer setOverallPoints={setOverallPoints} overallPoints={overallPoints} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
