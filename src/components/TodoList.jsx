import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, addTask, deleteTask, completeTask, updateTask }) {
    const [text, setText] = useState('');

    const handleAddTask = () => {
        addTask(text);
        setText('');
    };

    return (
        <div className="App">
            <h1>Event-Driven Serverless Solution: To Do App</h1>
            <div className="todo-list">
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        updateTask={updateTask}
                    />
                ))}
                <div className="add-task">
                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;