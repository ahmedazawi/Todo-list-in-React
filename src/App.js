import Header from './components/Header'
import TodoList from './views/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
