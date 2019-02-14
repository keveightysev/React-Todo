import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const placeholderTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: placeholderTasks,
      task: '',
      id: 0,
      completed: false,
    }
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: '',
    })
  }

  inputTask = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: Date.now()
    });
  }

  markCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          tasks={this.state.tasks} 
          markCompleted={this.markCompleted} 
        />
        <TodoForm 
          addTask={this.addTask} 
          task={this.state.task} 
          inputTask={this.inputTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
