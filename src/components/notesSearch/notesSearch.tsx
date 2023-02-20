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
    const [valueInput, setValueInput] = useState<string>('');
    const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    };

    const searchNotes = () => {
        setSearchValue(valueInput);
    };

    return (
        <>
            <TextField
                className={classes.searchNote}
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
