import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import TodoList from '../components/TodoList';
import SearchPanel from '../components/SearchPanel';
import ItemStatusFilter from '../components/ItemStatusFilter';
import ItemAddForm from '../components/ItemAddForm'
import './App.css'

export default class App extends Component {
  maxID = 0;
  todoData = [
    this.createTodoItem('Drink Coffee'),
    this.createTodoItem('Create awesome App'),
    this.createTodoItem('Bild React App'),
  ];

  state = { 
    todoData: this.todoData,
    term: '',
    filter: 'all' //all, active, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      hidden: false,
      id: this.maxID++,
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.state.todoData.findIndex((item) => item.id === id);
      const newArray = todoData.slice();
      newArray.splice(idx, 1);
      return {
        todoData: newArray
      }
    });
  }

  addItem = (text) => {
    if (!text.trim()) return;
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const dataClone = todoData.slice();
      dataClone.push(newItem);
      return {
        todoData: dataClone
      }
    });
  }

  toggleProperty(arr, id, prop) {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const newItem ={...oldItem, [prop]: !oldItem[prop]}
    const newData = arr.slice();
    newData.splice(idx, 1, newItem);
    return newData;
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  search(items, term) {
    if (term.length < 1) {
      return items
    }

    return items.filter((item) => {
      return item.label
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1; 
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  setFilter = (valueFilter) => {
    this.setState({ filter: valueFilter});
  }

  onSearchChange = (term) => {
    this.setState({term});
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter 
          filter={filter}
          onSetFilter={this.setFilter} />
        </div>
        <TodoList 
        todos={visibleItems} 
        onDeleted={ this.deleteItem }
        onToggleImportant={ this.onToggleImportant }
        onToggleDone={ this.onToggleDone } />
        <ItemAddForm 
        onAddItem={ this.addItem } />
      </div>
    )
  }
}
