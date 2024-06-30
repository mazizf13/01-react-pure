// src/components/ListManager.js
import React, { useState, useEffect } from "react";
import Form from "./Form";
import CheckList from "./Checklist";
import Stats from "./Stats";

function ListManager({ initialItems }) {
  const [listItems, setListItems] = useState(initialItems);
  const [sortOption, setSortOption] = useState("input");

  useEffect(() => {
    setListItems(sortItems(listItems, sortOption));
  }, [listItems, sortOption]);

  function addItem(title) {
    const newItem = {
      id: listItems.length + 1,
      title,
      done: false,
    };
    setListItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      return sortItems(updatedItems, sortOption);
    });
  }

  function toggleItemDone(id) {
    setListItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      return sortItems(updatedItems, sortOption);
    });
  }

  function removeItem(id) {
    setListItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return sortItems(updatedItems, sortOption);
    });
  }

  function updateItem(id, newTitle) {
    setListItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      );
      return sortItems(updatedItems, sortOption);
    });
  }

  function clearAllItems() {
    setListItems([]);
  }

  function sortItems(items, option) {
    let sortedItems = [...items];
    switch (option) {
      case "title":
        sortedItems = sortedItems.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "status":
        sortedItems = sortedItems.sort((a, b) => a.done - b.done);
        break;
      default:
        break;
    }
    // Move done items to the end
    sortedItems = sortedItems.sort((a, b) => a.done - b.done);
    return sortedItems;
  }

  return (
    <>
      <Form
        addItem={addItem}
        sortOption={sortOption}
        setSortOption={setSortOption}
        clearAllItems={clearAllItems}
      />
      <CheckList
        listItems={listItems}
        toggleItemDone={toggleItemDone}
        removeItem={removeItem}
        updateItem={updateItem}
      />
      <Stats listItems={listItems} />
    </>
  );
}

export default ListManager;
