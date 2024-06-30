import React, { useState } from "react";

function Form({ addItem, sortOption, setSortOption, clearAllItems }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle("");
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau dicatat nggak? 🤔</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={clearAllItems}>
        Clear All
      </button>
      <div className="sort-options">
        <label>
          <input
            type="radio"
            name="sort"
            value="input"
            checked={sortOption === "input"}
            onChange={() => setSortOption("input")}
          />
          Input Order
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="title"
            checked={sortOption === "title"}
            onChange={() => setSortOption("title")}
          />
          Title
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="status"
            checked={sortOption === "status"}
            onChange={() => setSortOption("status")}
          />
          Status
        </label>
      </div>
    </form>
  );
}

export default Form;
