// src/MyComponent.jsx
import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { useColor } from './ColorContext';
import { darken } from 'polished';
import { IoMdAdd } from "react-icons/io";
import '../Css/MyComponent.css';
import '../Css/ColorPicker.css'

export function MainContainer() {
  const containerRef = useRef(null);
  const bgButtonRef = useRef(null);
  const iconRef = useRef(null);
  const { color } = useColor(); // Ottieni il colore dal contesto

  const IconButton = forwardRef((props, ref) => (
    <button ref={ref} onClick={props.onClick} className='add-btn'>
      <IoMdAdd className='icon' style={{ color: darken(0.1, props.iconColor) }} />
    </button>
  ));
  

  useEffect(() => {
    if (containerRef.current && bgButtonRef.current && iconRef.current) {
      const darkenedColor = darken(0.1, color);
      containerRef.current.style.backgroundColor = color;
      bgButtonRef.current.style.backgroundColor = darkenedColor;
    }
  }, [color]);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const addNewNote = () => {
    const newNote = { id: Date.now(), title: 'Titolo', content: 'Scrivi qui' };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, newTitle, newContent) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='container' id='container' ref={containerRef}>
      <div className='post-it-area' id='post-it-area'>
        {notes.map((note) => (
          <div key={note.id} className='post-it'>
            <button className='delete-btn' onClick={() => deleteNote(note.id)}>x</button>
            <input className='post-it-title' value={note.title} onInput={(e) => updateNote(note.id, e.target.value, note.content)}></input>
            <textarea className='post-it-content' defaultValue={note.content} onInput={(e) => updateNote(note.id, note.title, e.target.value)}></textarea>
          </div>
        ))}
        <div className='add-container'>
          <div className='add-post-it' ref={bgButtonRef}>
            <div className='div-btn'>
              <IconButton ref={iconRef} onClick={addNewNote} iconColor={darken(0.1, color)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



