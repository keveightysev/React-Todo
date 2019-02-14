import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="task-list">
            {props.tasks.map(task => <Todo task={task} markCompleted={props.markCompleted} />)}
        </div>
    );
}

export default TodoList;