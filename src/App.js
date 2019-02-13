import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
      id: Date.now(),
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
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}/>
        <div className="add-task">
          <form onSubmit={this.addTask}>
            <input type="text" value={this.state.task} onChange={this.inputTask} name="task" placeholder="Add task"/>
            <button type="submit">Add</button>
            <button>Clear Completed</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
