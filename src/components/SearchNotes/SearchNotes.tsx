import React, { useState, Dispatch, SetStateAction } from 'react';

import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './SearchNotesStyle';

interface Props {
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchNotes = (props: Props) => {
  const classes = useStyles();

  const { setSearchValue } = props;
  const [text, setText] = useState<string>('');
  const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const searchNotes = () => {
    setSearchValue(text);
  };

  return (
    <div>
      <TextField
        className={classes.searchNote}
        onChange={filterChange}
        id="filled-basic"
        placeholder="חיפוש"
        multiline
        variant="filled"
        rows={1}
        defaultValue=""
      />

      <IconButton
        onClick={searchNotes}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchNotes;
