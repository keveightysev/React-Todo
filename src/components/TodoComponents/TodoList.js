import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="task-list">
            <h2>Todo List</h2>
            {props.tasks.map(task => <Todo task={task} />)}
        </div>
    );
}

export default TodoList;