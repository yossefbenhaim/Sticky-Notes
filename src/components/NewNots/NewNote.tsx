import React from 'react';
import usuStyle from './NewNoteStyle';
import Note from './NoteInterface';
import { Card, TextField } from '@mui/material';
import LongMenu from '../MenuAddNote/MenuEditingNote';
interface Props {
  note: Note;
}

const NewNote = (props: Props) => {
  const { note } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const classes = usuStyle();

  return (
    <div className={classes.containerField}>
      <Card className={classes.card}>
        <LongMenu />
        <TextField
          className={classes.titleCard}
          id="filled-basic"
          placeholder={note.title}
          multiline
          variant="filled"
          disabled={false}
          rows={1}
        />
        <TextField
          className={classes.contentCard}
          id="filled-basic"
          placeholder={note.content}
          multiline
          variant="filled"
          rows={5.8}
          defaultValue=""
        />
      </Card>
    </div>
  );
};

export default NewNote;
