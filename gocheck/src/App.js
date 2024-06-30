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

// CHANGE VALUE

import { useState } from "react";

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

  function addItem(title) {
    const newItem = {
      id: listItems.length + 1,
      title,
      done: false,
    };
    setListItems([...listItems, newItem]);
  }

  function toggleItemDone(id) {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function removeItem(id) {
    setListItems(listItems.filter((item) => item.id !== id));
  }

  function updateItem(id, newTitle) {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  }

  return (
    <>
      <Form addItem={addItem} />
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

function Form({ addItem }) {
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
