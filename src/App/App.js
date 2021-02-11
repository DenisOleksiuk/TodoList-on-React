import AppHeader from '../components/AppHeader';
import TodoList from '../components/TodoList';
import SearchPanel from '../components/SearchPanel';
import ItemStatusFilter from '../components/ItemStatusFilter';
import './App.css'


function App() {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Create awesome App', important: true, id: 2},
    {label: 'Bild React App', important: false, id: 3}
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

export default App;
