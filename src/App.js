import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {task:'Take over the world', id: Date.now(), completed: false}, 
        {task: 'Add a new task!', id: Date.now() + 1, completed: false},
        {task: 'This is a completed task', id: Date.now() + 2, completed: true}
      ],
      task: '',
      id: 0,
      completed: false,
    }
  }

  componentDidMount = () => {
    this.getLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveLocalStorage
    )
  }

  componentWillUnmount = () => {
    window.removeEventListener(
      "beforeunload",
      this.saveLocalStorage
      );
  }

  getLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState ({ [key]: value });
        }
      }
    }
  }

  saveLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: false
    };

    const tasks = [...this.state.tasks];

    tasks.push(newTask);

    this.setState({
      tasks,
      task: ''
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("task", "")
  }

  inputTask = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: Date.now()
    });

    localStorage.setItem(e.target.name, e.target.value);
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
    const updatedTasks = this.state.tasks.filter(task => !task.completed)
    this.setState({
      tasks: updatedTasks
    })

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  render() {
    return (
      <div className="container">
        <h2><span className="green">&#10004;</span> GSD</h2>
        <TodoForm 
          addTask={this.addTask} 
          task={this.state.task} 
          inputTask={this.inputTask}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          tasks={this.state.tasks} 
          markCompleted={this.markCompleted} 
        />
        <footer>
          <p>Made with <span role="img" aria-label="Cheese Wedge Emoji">&#129472;</span> by <a href="http://www.iridigital.com" target="_blank" rel="noopener noreferrer">Kevin Smith</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
