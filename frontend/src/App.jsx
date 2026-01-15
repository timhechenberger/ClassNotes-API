import { useState, useEffect } from 'react';

import AddNoteForm from './AddNoteForm.jsx';
import NoteList from './NoteList.jsx';
import { getNotes, addNote, deleteNote } from './api.js';

import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  async function handleAdd(text) {
    const newNote = await addNote(text);
    setNotes([...notes, newNote]);
  }

  async function handleDelete(id) {
    const ok = await deleteNote(id);
    if (ok) setNotes(notes.filter(n => n.id !== id));
  }

  return (
  <div className="app-container">
    <h1>ClassNotes</h1>
    <AddNoteForm onAdd={handleAdd} />
    <NoteList notes={notes} onDelete={handleDelete} />
  </div>
  );
}

export default App;
