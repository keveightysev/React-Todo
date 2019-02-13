import React from 'react';

const TodoForm = (props) => {
    return (
        <div className="add-task">
          <form onSubmit={props.addTask}>
            <input type="text" value={props.task} onChange={props.inputTask} name="task" placeholder="Add task"/>
            <button type="submit">Add</button>
            <button>Clear Completed</button>
          </form>
        </div>
    );
}

export default TodoForm;