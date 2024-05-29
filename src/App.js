import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <h1>Event-Driven Serverless Solution: To Do App</h1>
            <TodoList />
        </div>
    ); 
}

export default App;