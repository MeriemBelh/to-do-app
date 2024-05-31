import React, { useState } from 'react';

function TodoItem({ task, deleteTask, completeTask, editTask }) {
  const [editMode, setEditMode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [text, setText] = useState(task.task);

  function handleChange() {
    completeTask(task.id);
  }

  function handleEdit() {
    setEditMode(true);
    setText(task.task);
  }

  function handleSave() {
    editTask(task.id, text);
    setEditMode(false);
  }

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      {editMode ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p className={task.completed ? 'completed' : ''}>{task.task}</p>
      )}
      <button
        className={`edit-save-button ${editMode ? 'save' : 'edit'}`}
        onClick={editMode ? handleSave : handleEdit}
      >
        {editMode ? 'Save' : 'Edit'}
      </button>
      <button
        className="details-button"
        onClick={toggleDetails}
      >
        Details
      </button>
      {showDetails && (
        <div className="details">
          <p>ID: {task.id}</p>
          <p>Task: {task.task}</p>
          <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      )}
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;