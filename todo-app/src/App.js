import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      text: "hello",
    },
  ]);
  const [inputNote, setInputNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  function handleInputChange(e) {
    setInputNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (inputNote.trim() !== "") {
      if (isEditing) {
        setNotes(
          notes.map((note) =>
            note.id === currentNote.id ? { ...note, text: inputNote } : note
          )
        );
        setIsEditing(false);
        setCurrentNote({});
      } else {
        const newNote = {
          id: new Date().getTime(),
          text: inputNote,
        };
        setNotes([...notes, newNote]);
      }
      setInputNote("");
    }
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  function handleEditNote(note) {
    setIsEditing(true);
    setInputNote(note.text);
    setCurrentNote(note);
  }

  return (
    <div className="app">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a note"
          value={inputNote}
          onChange={handleInputChange}
        />
        <button>{isEditing ? "Update" : "Add"}</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <div>
              <button onClick={() => handleEditNote(note)}>Edit</button>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
