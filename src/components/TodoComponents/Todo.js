import React from 'react';

const Todo = (props) => {
    return (
        <p>{props.task.task} - {props.task.id}</p>
    );
}

export default Todo;