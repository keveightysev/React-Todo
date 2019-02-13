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

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTask={this.addTask} task={this.state.task} inputTask={this.inputTask}/>
      </div>
    );
  }
}

export default App;
