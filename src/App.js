import './App.css';
import TodoList from './containers/TodoList'
import GoalsList from './containers/GoalsList'

function App() {
  return (
    <div className="App">
      <GoalsList />
      <TodoList />
    </div>
  );
}

export default App;
