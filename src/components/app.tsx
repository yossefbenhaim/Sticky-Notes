import React, { useState, useEffect, useMemo } from 'react';

import Note from 'models/interfaces/Note';

import useStyles from './appStyles';
import AddNote from './addNote/addNote';
import NoteItem from './noteItem/noteItem';
import NotesSearch from './notesSearch/notesSearch';

const KEY_NOTE = 'notes';

const App: React.FC = () => {
    const classes = useStyles();
    const [notes, setNotes] = useState<Note[]>(
        JSON.parse(localStorage.getItem(KEY_NOTE) ?? '[]')
    );
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        localStorage.setItem(KEY_NOTE, JSON.stringify(notes));
    }, [notes]);

    const filterNotes = useMemo(
        () =>
            notes.filter(
                (prevNote) =>
                    prevNote.title.includes(searchValue) ||
                    prevNote.content.includes(searchValue)
            ),
        [searchValue, notes]
    );

    return (
        <>
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
        </>
    );
};

export default App;
