import React from "react";
import Item from "./Item";

function CheckList({ listItems, toggleItemDone, removeItem, updateItem }) {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleItemDone={toggleItemDone}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
