import useStyles from './AppStyles';
import React, { useState, useEffect, useMemo } from 'react';
import NoteInterface from './components/NewNots/NoteInterface';
import Note from './components/NewNots/Note';
import AddButtonItem from './components/AddNoteButton/AddNoteButton';

import SearchNotes from './components/SearchNotes/SearchNotes';

const App: React.FC = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState<NoteInterface[]>(
    JSON.parse(localStorage.getItem('notes') ?? '[]')
  );

  const [searchValue, setSearchValue] = useState<string>('');
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') ?? '[]');
    setNotes(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const filterNotes = useMemo(
    () =>
      notes.filter((prevNote) => {
        return prevNote.title.includes(searchValue);
      }),
    [searchValue, notes]
  );

  return (
    <div className={classes.containerFilde}>
      <div className={classes.conatainerHeader}>
        <div className={classes.containerInputSearchNots}>
          <SearchNotes setSearchValue={setSearchValue} />
        </div>
        <div className={classes.containetrButtonAddNote}>
          <AddButtonItem notes={notes} setNotes={setNotes}></AddButtonItem>
        </div>
      </div>
      <div className={classes.conatainerBody}>
        {filterNotes.map((note) => (
          <Note setNotes={setNotes} note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
