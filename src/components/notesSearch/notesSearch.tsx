import React, { useState, Dispatch, SetStateAction } from 'react';

import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './notesSearchStyle';

interface Props {
    setSearchValue: Dispatch<SetStateAction<string>>;
}

const NotesSearch: React.FC<Props> = (props) => {
    const classes = useStyles();

    const { setSearchValue } = props;
    const [inputValue, setInputValue] = useState<string>('');
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const searchNotes = () => {
        setSearchValue(inputValue);
    };

    return (
        <>
            <TextField
                className={classes.noteSearch}
                onChange={filterChange}
                placeholder="חיפוש"
                multiline
                variant="filled"
                rows={1}
            />

            <IconButton onClick={searchNotes}>
                <SearchIcon />
            </IconButton>
        </>
    );
};

export default NotesSearch;
