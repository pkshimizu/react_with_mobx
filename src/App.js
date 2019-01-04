import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo_list'
import TodoStore from "./stores/todo";

const todoStore = TodoStore.create({todos:[]});

class App extends Component {
  render() {
    return (
      <TodoList store={todoStore}/>
    );
  }
}

export default App;
