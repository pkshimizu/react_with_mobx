import {types} from 'mobx-state-tree';


const Todo = types
  .model({
    task: types.string,
    completed: types.boolean,
    assignee: types.string
  })
  .actions(self => ({
    toggleCompleted() {
      self.completed = !self.completed;
    },
    updateTask(newTask) {
      self.task = newTask;
    }
  }));

const TodoStore = types
  .model({
    todos: types.array(Todo)
  })
  .views(self => ({
    get completedTodosCount() {
      return self.todos.filter(todo => todo.completed === true).length;
    },
    get report() {
      if (self.todos.length === 0)
        return "<none>";
      return `Next todo: "${self.todos[0].task}". ` +
        `Progress: ${self.completedTodosCount}/${self.todos.length}`;
    }
  }))
  .actions(self => ({
    addTodo(task) {
      self.todos.push({
        task: task,
        completed: false,
        assignee: ''
      });
    }
  }));

export default TodoStore;
