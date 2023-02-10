import React, { useState } from 'react';
import useStyles from './NoteStyles';
import NoteInterface from './NoteInterface';
import { Card, TextField, IconButton } from '@mui/material';
import MenuNote from '../MenuAddNote/MenuNote';
import DoneIcon from '@mui/icons-material/Done';

interface Props {
  note: NoteInterface;
  setNotes: (value: React.SetStateAction<NoteInterface[]>) => void;
}

const Note = (props: Props) => {
  const { note, setNotes } = props;
  const [titleText, setTitleText] = useState<string>(note.title);
  const [contentText, setContentText] = useState<string>(note.content);
  let [flag, setFlag] = useState<boolean>(true);
  const classes = useStyles({ color: note.color });

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(event.target.value);
    console.log(titleText);

    return event.target.value;
  };
  const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentText(event.target.value);
    return event.target.value;
  };
  const upDateNote = () => {
    setFlag(true);
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
            disabled={flag}
            rows={1}
            defaultValue={titleText}
          />

          <MenuNote setFlag={setFlag} id={note.id} setNotes={setNotes} />
        </div>
        <TextField
          className={classes.cardContent}
          onChange={contentChange}
          id="filled-basic"
          placeholder="תוכן"
          multiline
          variant="filled"
          disabled={flag}
          rows={5.8}
          defaultValue={contentText}
        />
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
      </Card>
    </div>
  );
};

export default Note;
