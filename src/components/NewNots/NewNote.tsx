import React from 'react';
import usuStyle from './NewNoteStyle';
import Note from './NoteInterface';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';

interface Props {
  note: Note;
}

const NewNote = (props: Props) => {
  const { note } = props;
  const classes = usuStyle();

  return (
    <Card className={classes.containerField}>
      <div className={classes.headerContainer}>
        <TextField
          className={classes.titleCard}
          id="outlined-textarea"
          placeholder="Placeholder"
          multiline
          disabled={false}
          rows={1}
          defaultValue={note.title}
        />
      </div>
      <div className={classes.contentContainer}>
        <TextField
          className={classes.contentCard}
          id="outlined-textarea"
          placeholder="Placeholder"
          multiline
          rows={6.8}
          defaultValue="Default Value"
        />
      </div>
    </Card>
  );
};

export default NewNote;
