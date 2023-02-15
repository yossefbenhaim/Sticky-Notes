import React, { useState } from 'react';
import useStyles from './NoteStyles';
import NoteInterface from './NoteInterface';
import { Card, TextField, IconButton } from '@mui/material';
import MenuNote from '../NoteMenu/NoteMenu';
import DoneIcon from '@mui/icons-material/Done';

interface Props {
  note: NoteInterface;
  setNotes: (value: React.SetStateAction<NoteInterface[]>) => void;
}

const Note = (props: Props) => {
  const { note, setNotes } = props;

  let [titleNote, setTitleNote] = useState<string>('');

  let [contentNote, setContentNote] = useState<string>('');

  let [flag, setFlag] = useState<boolean>(false);

  const classes = useStyles({ color: note.color });

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleNote(event.target.value);
  };

  const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentNote(event.target.value);
  };

  const upDateNote = () => {
    setFlag(false);
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) =>
        prevNote.id !== note.id
          ? prevNote
          : {
              id: note.id,
              title: titleNote,
              content: contentNote,
              color: note.color,
            }
      )
    );
  };

  return (
    <div className={classes.containerField}>
      <Card className={classes.card}>
        <div className={classes.containerMenuAndTitle}>
          <TextField
            className={classes.cardTitle}
            onChange={titleChange}
            id="filled-basic"
            placeholder="כותרת"
            multiline
            variant="filled"
            disabled={!flag}
            rows={1}
            defaultValue={note.title}
          />

          <MenuNote
            id={note.id}
            note={note}
            titleNote={titleNote}
            contentNote={contentNote}
            setFlag={setFlag}
            setNotes={setNotes}
          />
        </div>
        <TextField
          className={classes.cardContent}
          onChange={contentChange}
          id="filled-basic"
          placeholder="תוכן"
          multiline
          variant="filled"
          disabled={!flag}
          rows={6}
          defaultValue={note.content}
        />
        {flag && (
          <div className={classes.doneIcon}>
            <IconButton
              type="button"
              className={classes.icon}
              aria-label="doneIcon"
              onClick={upDateNote}
            >
              <DoneIcon />
            </IconButton>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Note;
