import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask} className="form">
          <div className="add">
            <input 
              type="text" 
              value={props.task} 
              onChange={props.inputTask} 
              name="task" 
              placeholder="Add task"
              required
              />
            <button className="submit">Add</button>
          </div>
          <button type="button" onClick={props.clearCompleted} className="clear">Clear Completed</button>
        </form>
    );
}

export default TodoForm;