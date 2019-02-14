import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <p className={`${props.task.completed ? 'done' : null}`} onClick={() => props.markCompleted(props.task.id)}>{props.task.task} - {props.task.id}</p>
    );
}

export default Todo;