import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div className={`task`} onClick={() => props.markCompleted(props.task.id)}>
        <input type="checkbox" className="check" checked={props.task.completed ? 'done' : null} readOnly />
        <p className={`task-text`}><span className={props.task.completed ? 'done' : null}>{props.task.task}</span></p>
        </div>
    );
}

export default Todo;