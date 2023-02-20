import useStyles from './AppStyles';
import React, { useState, useEffect, useMemo } from 'react';
import Note from './interfaces/Note';
import NoteItem from './components/noteItem/noteItem';
import AddNote from './components/addNote/addNote';

import NotesSearch from './components/notesSearch/notesSearch';

const App: React.FC = () => {
    const KEY_NOTE = 'notes';
    const classes = useStyles();
    const [notes, setNotes] = useState<Note[]>(
        JSON.parse(localStorage.getItem(KEY_NOTE) ?? '[]')
    );
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        localStorage.setItem(KEY_NOTE, JSON.stringify(notes));
    }, [notes]);

    const filterNotes = useMemo(
        () => notes.filter((prevNote) => prevNote.title.includes(searchValue)),
        [searchValue, notes]
    );

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.searchNotesContainer}>
                    <NotesSearch setSearchValue={setSearchValue} />
                </div>
                <div className={classes.addNoteContainetr}>
                    <AddNote setNotes={setNotes} />
                </div>
            </div>
            <div className={classes.body}>
                {filterNotes.map((note) => (
                    <NoteItem setNotes={setNotes} note={note} key={note.id} />
                ))}
            </div>
        </div>
    );
};

export default App;
