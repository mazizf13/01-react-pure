// import { useState } from "react";

// const initialListItems = [
//   {
//     id: 1,
//     title: "Eat",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "Sleep",
//     done: true,
//   },
//   {
//     id: 3,
//     title: "Code",
//     done: false,
//   },
// ];

// function App() {
//   const [listItems, setListItems] = useState(initialListItems);

//   function addItem(title) {
//     const newItem = {
//       id: listItems.length + 1,
//       title,
//       done: false,
//     };
//     setListItems([...listItems, newItem]);
//   }

//   function toggleItemDone(id) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       )
//     );
//   }

//   function removeItem(id) {
//     setListItems(listItems.filter((item) => item.id !== id));
//   }

//   function updateItem(id, newTitle) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, title: newTitle } : item
//       )
//     );
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form addItem={addItem} />
//       <CheckList
//         listItems={listItems}
//         toggleItemDone={toggleItemDone}
//         removeItem={removeItem}
//         updateItem={updateItem}
//       />
//       <Stats listItems={listItems} />
//     </div>
//   );
// }

// function Logo() {
//   return <span className="logo">📝 GoCheck ✅</span>;
// }

// function Form({ addItem }) {
//   const [title, setTitle] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (title.trim()) {
//       addItem(title);
//       setTitle("");
//     }
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>Ada yang mau dicatat nggak? 🤔</h3>
//       <input
//         type="text"
//         name="title"
//         id=""
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function CheckList({ listItems, toggleItemDone, removeItem, updateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {listItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             toggleItemDone={toggleItemDone}
//             removeItem={removeItem}
//             updateItem={updateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, toggleItemDone, removeItem, updateItem }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(item.title);

//   function handleEdit(e) {
//     e.preventDefault();
//     updateItem(item.id, newTitle);
//     setIsEditing(false);
//   }

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={item.done}
//         onChange={() => toggleItemDone(item.id)}
//       />
//       {isEditing ? (
//         <form onSubmit={handleEdit} className="edit-form">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <div className="edit-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setIsEditing(false)}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <span style={{ textDecoration: item.done ? "line-through" : "" }}>
//           {item.title}
//         </span>
//       )}
//       {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
//       <button onClick={() => removeItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ listItems }) {
//   const totalItems = listItems.length;
//   const doneItems = listItems.filter((item) => item.done).length;
//   const percentage =
//     totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

//   return (
//     <footer className="stats">
//       Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
//       {percentage}%) ✅
//     </footer>
//   );
// }

// export default App;

// ALTERNATIVE METHOD BEFORE USING GLOBAL STATE

// import { useState } from "react";

// const initialListItems = [
//   {
//     id: 1,
//     title: "Eat",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "Sleep",
//     done: true,
//   },
//   {
//     id: 3,
//     title: "Code",
//     done: false,
//   },
// ];

// function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <ListManager initialItems={initialListItems} />
//     </div>
//   );
// }

// function Logo() {
//   return <span className="logo">📝 GoCheck ✅</span>;
// }

// function ListManager({ initialItems }) {
//   const [listItems, setListItems] = useState(initialItems);

//   function addItem(title) {
//     const newItem = {
//       id: listItems.length + 1,
//       title,
//       done: false,
//     };
//     setListItems([...listItems, newItem]);
//   }

//   function toggleItemDone(id) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       )
//     );
//   }

//   function removeItem(id) {
//     setListItems(listItems.filter((item) => item.id !== id));
//   }

//   function updateItem(id, newTitle) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, title: newTitle } : item
//       )
//     );
//   }

//   return (
//     <>
//       <Form addItem={addItem} />
//       <CheckList
//         listItems={listItems}
//         toggleItemDone={toggleItemDone}
//         removeItem={removeItem}
//         updateItem={updateItem}
//       />
//       <Stats listItems={listItems} />
//     </>
//   );
// }

// function Form({ addItem }) {
//   const [title, setTitle] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (title.trim()) {
//       addItem(title);
//       setTitle("");
//     }
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>Ada yang mau dicatat nggak? 🤔</h3>
//       <input
//         type="text"
//         name="title"
//         id=""
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function CheckList({ listItems, toggleItemDone, removeItem, updateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {listItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             toggleItemDone={toggleItemDone}
//             removeItem={removeItem}
//             updateItem={updateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, toggleItemDone, removeItem, updateItem }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(item.title);

//   function handleEdit(e) {
//     e.preventDefault();
//     updateItem(item.id, newTitle);
//     setIsEditing(false);
//   }

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={item.done}
//         onChange={() => toggleItemDone(item.id)}
//       />
//       {isEditing ? (
//         <form onSubmit={handleEdit} className="edit-form">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <div className="edit-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setIsEditing(false)}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <span style={{ textDecoration: item.done ? "line-through" : "" }}>
//           {item.title}
//         </span>
//       )}
//       {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
//       <button onClick={() => removeItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ listItems }) {
//   const totalItems = listItems.length;
//   const doneItems = listItems.filter((item) => item.done).length;
//   const percentage =
//     totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

//   return (
//     <footer className="stats">
//       Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
//       {percentage}%) ✅
//     </footer>
//   );
// }

// export default App;

// DELETE ITEM: CHILD TO PARENT DATA FLOW

// import { useState } from "react";

// const initialListItems = [
//   {
//     id: 1,
//     title: "Eat",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "Sleep",
//     done: true,
//   },
//   {
//     id: 3,
//     title: "Code",
//     done: false,
//   },
// ];

// function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <ListManager initialItems={initialListItems} />
//     </div>
//   );
// }

// function Logo() {
//   return <span className="logo">📝 GoCheck ✅</span>;
// }

// function ListManager({ initialItems }) {
//   const [listItems, setListItems] = useState(initialItems);

//   function addItem(title) {
//     const newItem = {
//       id: listItems.length + 1,
//       title,
//       done: false,
//     };
//     setListItems([...listItems, newItem]);
//   }

//   function toggleItemDone(id) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       )
//     );
//   }

//   function removeItem(id) {
//     setListItems(listItems.filter((item) => item.id !== id));
//   }

//   function updateItem(id, newTitle) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, title: newTitle } : item
//       )
//     );
//   }

//   return (
//     <>
//       <Form addItem={addItem} />
//       <CheckList
//         listItems={listItems}
//         toggleItemDone={toggleItemDone}
//         removeItem={removeItem}
//         updateItem={updateItem}
//       />
//       <Stats listItems={listItems} />
//     </>
//   );
// }

// function Form({ addItem }) {
//   const [title, setTitle] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (title.trim()) {
//       addItem(title);
//       setTitle("");
//     }
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>Ada yang mau dicatat nggak? 🤔</h3>
//       <input
//         type="text"
//         name="title"
//         id=""
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function CheckList({ listItems, toggleItemDone, removeItem, updateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {listItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             toggleItemDone={toggleItemDone}
//             removeItem={removeItem}
//             updateItem={updateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, toggleItemDone, removeItem, updateItem }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(item.title);

//   function handleEdit(e) {
//     e.preventDefault();
//     updateItem(item.id, newTitle);
//     setIsEditing(false);
//   }

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={item.done}
//         onChange={() => toggleItemDone(item.id)}
//       />
//       {isEditing ? (
//         <form onSubmit={handleEdit} className="edit-form">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <div className="edit-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setIsEditing(false)}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <span style={{ textDecoration: item.done ? "line-through" : "" }}>
//           {item.title}
//         </span>
//       )}
//       {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
//       <button onClick={() => removeItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ listItems }) {
//   const totalItems = listItems.length;
//   const doneItems = listItems.filter((item) => item.done).length;
//   const percentage =
//     totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

//   return (
//     <footer className="stats">
//       Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
//       {percentage}%) ✅
//     </footer>
//   );
// }

// export default App;

// CHANGING THE STATE VALUE OF THE LOWEST COMPONENT HIERARCHY

// import { useState } from "react";

// const initialListItems = [
//   {
//     id: 1,
//     title: "Eat",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "Sleep",
//     done: true,
//   },
//   {
//     id: 3,
//     title: "Code",
//     done: false,
//   },
// ];

// function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <ListManager initialItems={initialListItems} />
//     </div>
//   );
// }

// function Logo() {
//   return <span className="logo">📝 GoCheck ✅</span>;
// }

// function ListManager({ initialItems }) {
//   const [listItems, setListItems] = useState(initialItems);

//   function addItem(title) {
//     const newItem = {
//       id: listItems.length + 1,
//       title,
//       done: false,
//     };
//     setListItems([...listItems, newItem]);
//   }

//   function toggleItemDone(id) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       )
//     );
//   }

//   function removeItem(id) {
//     setListItems(listItems.filter((item) => item.id !== id));
//   }

//   function updateItem(id, newTitle) {
//     setListItems(
//       listItems.map((item) =>
//         item.id === id ? { ...item, title: newTitle } : item
//       )
//     );
//   }

//   return (
//     <>
//       <Form addItem={addItem} />
//       <CheckList
//         listItems={listItems}
//         toggleItemDone={toggleItemDone}
//         removeItem={removeItem}
//         updateItem={updateItem}
//       />
//       <Stats listItems={listItems} />
//     </>
//   );
// }

// function Form({ addItem }) {
//   const [title, setTitle] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (title.trim()) {
//       addItem(title);
//       setTitle("");
//     }
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>Ada yang mau dicatat nggak? 🤔</h3>
//       <input
//         type="text"
//         name="title"
//         id=""
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function CheckList({ listItems, toggleItemDone, removeItem, updateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {listItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             toggleItemDone={toggleItemDone}
//             removeItem={removeItem}
//             updateItem={updateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, toggleItemDone, removeItem, updateItem }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(item.title);

//   function handleEdit(e) {
//     e.preventDefault();
//     updateItem(item.id, newTitle);
//     setIsEditing(false);
//   }

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={item.done}
//         onChange={() => toggleItemDone(item.id)}
//       />
//       {isEditing ? (
//         <form onSubmit={handleEdit} className="edit-form">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <div className="edit-buttons">
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setIsEditing(false)}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <span style={{ textDecoration: item.done ? "line-through" : "" }}>
//           {item.title}
//         </span>
//       )}
//       {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
//       <button onClick={() => removeItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ listItems }) {
//   const totalItems = listItems.length;
//   const doneItems = listItems.filter((item) => item.done).length;
//   const percentage =
//     totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

//   return (
//     <footer className="stats">
//       Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
//       {percentage}%) ✅
//     </footer>
//   );
// }

// export default App;

// SORTING DATA SERIES THROUGH STATE AND DELETE ALLITEMS
import { useState, useEffect } from "react";

const initialListItems = [
  {
    id: 1,
    title: "Eat",
    done: false,
  },
  {
    id: 2,
    title: "Sleep",
    done: true,
  },
  {
    id: 3,
    title: "Code",
    done: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <ListManager initialItems={initialListItems} />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝 GoCheck ✅</span>;
}

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

function Stats({ listItems }) {
  const totalItems = listItems.length;
  const doneItems = listItems.filter((item) => item.done).length;
  const percentage =
    totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

  return (
    <footer className="stats">
      Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
      {percentage}%) ✅
    </footer>
  );
}

export default App;
