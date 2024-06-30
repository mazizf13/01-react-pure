import React, { useState } from "react";

function Item({ item, toggleItemDone, removeItem, updateItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  function handleEdit(e) {
    e.preventDefault();
    updateItem(item.id, newTitle);
    setIsEditing(false);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => toggleItemDone(item.id)}
      />
      {isEditing ? (
        <form onSubmit={handleEdit} className="edit-form">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <span style={{ textDecoration: item.done ? "line-through" : "" }}>
          {item.title}
        </span>
      )}
      {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
