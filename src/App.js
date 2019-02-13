import React from 'react';

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

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

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
        <div className="task-list">
          <h2>Todo List</h2>
          {this.state.tasks.map(task => {
            return (
              <p>{task.task} - {task.id}</p>
            )
          })}
        </div>
        <div className="add-task">
          <input type="text" value={this.state.task} onChange={this.inputTask} name="task" placeholder="Add task"/>
          <button onClick={this.addTask}>Add</button>
          <button>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
