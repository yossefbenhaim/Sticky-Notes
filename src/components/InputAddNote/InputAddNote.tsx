import React from 'react';
import { TextField } from '@mui/material';
import useStyles from './InputAddNoteStyle';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';

const InputAddNote = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.inoutStyle}>
        <TextField
          disabled={true}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <CardContent>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </CardContent>
      </Card>
    </div>
  );
};

export default InputAddNote;
