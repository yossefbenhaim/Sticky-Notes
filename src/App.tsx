import useStyles from './AppStyles';
import React, { useState, useEffect } from 'react';
import NoteInterface from './components/NewNots/NoteInterface';
import Note from './components/NewNots/Note';
import AddButtonItem from './components/Butten/AddButtonNote';

import { v4 as uuidV4 } from 'uuid';
import SearchNots from './components/SearchNote/SearchNots';

const App: React.FC = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState<NoteInterface[]>([]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') ?? '[]');
    setNotes(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (color: string) => {
    setNotes([
      {
        id: uuidV4(),
        title: 'secound note',
        content: 'bla bla bla',
        color: color,
      },
      ...notes,
    ]);
  };

  return (
    <div className={classes.containerFilde}>
      <div className={classes.conatainerHeader}>
        <div className={classes.containerInputSearchNots}>
          <SearchNots />
        </div>
        <div className={classes.containetrButtonAddNote}>
          <AddButtonItem onClick={(color) => addNote(color)}></AddButtonItem>
        </div>
      </div>
      <div className={classes.conatainerBody}>
        {notes.map((note) => (
          <Note setNotes={setNotes} note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
