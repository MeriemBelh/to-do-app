import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('https://v3u83sevl0.execute-api.us-east-1.amazonaws.com/prod/todo');
        const data = await response.json();
        setTasks(data);
    };

    const addTask = async (task) => {
        const response = await fetch('https://v3u83sevl0.execute-api.us-east-1.amazonaws.com/prod/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task, completed: false }),
        });
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
    };

    const deleteTask = async (id) => {
        await fetch(`https://v3u83sevl0.execute-api.us-east-1.amazonaws.com/prod/todo/${id}`, {
            method: 'DELETE',
        });
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completeTask = async (id) => {
        const task = tasks.find(task => task.id === id);
        const response = await fetch(`https://v3u83sevl0.execute-api.us-east-1.amazonaws.com/prod/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...task, completed: !task.completed }),
        });
        const updatedTask = await response.json();
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    };

    const updateTask = async (id, newText) => {
        const task = tasks.find(task => task.id === id);
        const response = await fetch(`https://v3u83sevl0.execute-api.us-east-1.amazonaws.com/prod/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...task, task: newText }),
        });
        const updatedTask = await response.json();
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    };

    return (
        <div>
            <TodoList 
                tasks={tasks} 
                addTask={addTask} 
                deleteTask={deleteTask} 
                completeTask={completeTask} 
                updateTask={updateTask} 
            />
        </div>
    );
}

export default App;
