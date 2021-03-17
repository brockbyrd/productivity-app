import './App.css';
import TodoContainer from './containers/TodoContainer'
import GoalsContainer from './containers/GoalsContainer'
import RewardsContainer from './containers/RewardsContainer'

function App() {
  return (
    <div className="App">
      <GoalsContainer />
      <TodoContainer />
      <RewardsContainer />
    </div>
  );
}

export default App;
