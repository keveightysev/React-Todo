import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const taskDate = props.task.id;
    console.log(`${taskDate.toString()}`)
    return (
        <div className={`task `} onClick={() => props.markCompleted(props.task.id)}>
        <input type="checkbox" className="check" checked={props.task.completed ? 'done' : null} />
        <p className={`${props.task.completed ? 'done' : null}`}>{props.task.task}</p>
        </div>
    );
}

export default Todo;