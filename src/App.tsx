import useStyles from './AppStyles';
import React, { useState, useEffect } from 'react';
import Note from './components/NewNots/NoteInterface';
import NewNote from './components/NewNots/NewNote';
import ButtonAddItem from './components/Butten/ButtonAddItem';
import InputSearchNots from './components/InputSearchNote/InputAddNots';
import { v4 as uuidV4 } from 'uuid';

// const NOTES_l: Note[] = [
//   { id: uuidV4(), title: 'first note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'secound note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'first note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'secound note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'first note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'secound note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'first note', content: 'bla bla bla' },
//   { id: uuidV4(), title: 'secound note', content: 'bla bla bla' },

//   {
//     id: uuidV4(),
//     title: 'third note',
//     content:
//       ' bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla',
//   },
// ];
const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [note, setNote] = useState<Note>();

  const addNote = (color: string) => {
    setNotes([
      ...notes,
      {
        id: uuidV4(),
        title: 'secound note',
        content: 'bla bla bla',
        color: color,
      },
    ]);
  };

  const classes = useStyles();
  console.log('yes');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={classes.containerFilde}>
      <div className={classes.conatainerHeader}>
        <div className={classes.containerInputSearchNots}>
          <InputSearchNots />
        </div>
        <div className={classes.containetrButtonAddNote}>
          <ButtonAddItem onClick={(color) => addNote(color)}></ButtonAddItem>
        </div>
      </div>
      <div className={classes.conatainerBody}>
        {notes.map((note) => (
          <NewNote note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};
const addNoteslist = (props: Note) => {};

export default App;
