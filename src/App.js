import './App.css';
import TodoList from './containers/TodoList'
import GoalsList from './containers/GoalsList'
import RewardsList from './containers/RewardsList'

function App() {
  return (
    <div className="App">
      <GoalsList />
      <TodoList />
      <RewardsList />
    </div>
  );
}

export default App;
