import useStyles from './AppStyles';
import React, { useState } from 'react';
import Note from './components/NewNots/NoteInterface';
import NewNote from './components/NewNots/NewNote';
import ButtonAddItem from './components/Butten/ButtonAddItem';
import InputAddNote from './components/InputAddNote/InputAddNote';

const NOTES_l: Note[] = [
  { id: '1', title: 'first note', content: 'bla bla bla' },
  { id: '2', title: 'secound note', content: 'bla bla bla' },
  {
    id: '3',
    title: 'third note',
    content:
      ' bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla',
  },
];

const App = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState<Note[]>(NOTES_l);
  return (
    <div className={classes.body}>
      {notes.map((note) => (
        <NewNote note={note} key={note.id} />
      ))}
    </div>
  );
};

export default App;

// import useStyles from "./AppStyles";
// import React, { useState } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions,
// } from "@mui/material";

// interface Note {
//   id: string;
//   title: string;
//   content: string;
// }

// interface Props {
//   note: Note;
// }

// const NoteItem = (props: Props) => {
//   const { note } = props;
//   return (
//     <div>
//       <h1>{note.id}</h1>
//     </div>
//   );
// };

// const TEMP: Note[] = [
//   { id: "gf", title: "kjs", content: "js" },
//   { id: "gf", title: "kjs", content: "js" },
//   { id: "gf", title: "kjs", content: "js" },
// ];

// const App = () => {
//   const classes = useStyles();
//   const [notes, setNotes] = useState<Note[]>(TEMP);

//   return (
//     <div className={classes.body}>
//       {notes.map((note) => (
//         <NoteItem note={note} key={note.id} />
//       ))}
//     </div>
//   );
// };

// export default App;
