import React, { useState } from 'react';

function TodoItem({ task, deleteTask, toggleCompleted, editTask }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(task.text);

  function handleChange() {
    toggleCompleted(task.id);
  }

  function handleEdit() {
    setEditMode(true);
    setText(task.text);
  }

  function handleSave() {
    editTask(task.id, text);
    setEditMode(false);
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
        <p className={task.completed ? 'completed' : ''}>{task.text}</p>
      )}
      <button
        className={`edit-save-button ${editMode ? 'save' : 'edit'}`}
        onClick={editMode ? handleSave : handleEdit}
      >
        {editMode ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;