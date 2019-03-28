import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const sortedList = props.tasks.sort((a,b) => a.completed - b.completed);
    return (
        <div className="task-list">
            {sortedList.map(task => 
                <Todo 
                    task={task} 
                    markCompleted={props.markCompleted} 
                    deleteTask={props.deleteTask}
                    key={task.id}
                />)}
        </div>
    );
}

export default TodoList;