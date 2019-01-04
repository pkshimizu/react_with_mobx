import React from 'react';
import {observer} from "mobx-react";

const TodoList = observer(({store}) => (
  <div>
    { store.report }
    <ul>
      { store.todos.map(
        (todo, idx) => <TodoView todo={ todo } key={ idx } />
      ) }
    </ul>
    <button onClick={ () => store.addTodo(prompt('Enter a new todo:','coffee plz')) }>New Todo</button>
    <small> (double-click a todo to edit)</small>
  </div>
));

const TodoView = observer(({todo}) => (
  <li onDoubleClick={ () => todo.updateTask(prompt('Task name', todo.task) || todo.task) }>
    <input
      type='checkbox'
      checked={ todo.completed }
      onChange={ () => todo.toggleCompleted() }
    />
    { todo.task }
    { todo.assignee
      ? <small>{ todo.assignee.name }</small>
      : null
    }
  </li>
));

export default TodoList;