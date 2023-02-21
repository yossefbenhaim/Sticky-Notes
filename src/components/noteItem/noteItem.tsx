import React, { useState } from 'react';
import useStyles from './noteItemStyles';
import Note from 'models/interfaces/Note';
import { Card, TextField, IconButton } from '@mui/material';
import NoteMenu from '../noteMenu/noteMenu';
import DoneIcon from '@mui/icons-material/Done';
import ColorPalette from '../colorPalette/colorPalette';
import PaletteIcon from '@mui/icons-material/Palette';

interface Props {
    note: Note;
    setNotes: (value: React.SetStateAction<Note[]>) => void;
}

const NoteItem: React.FC<Props> = (props) => {
    const { note, setNotes } = props;

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const classes = useStyles({ color: note.color });

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const changeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };
    const changeNoteColor = (color: string) => {
        setNotes((prevNotes) =>
            prevNotes.map((prevNote) =>
                prevNote.id !== note.id
                    ? prevNote
                    : {
                          ...prevNote,
                          color,
                      }
            )
        );
    };
    const updateNote = () => {
        setIsEdit(false);
        setNotes((prevNotes) =>
            prevNotes.map((prevNote) =>
                prevNote.id !== note.id
                    ? prevNote
                    : {
                          ...prevNote,
                          title: title,
                          content: content,
                      }
            )
        );
    };

    return (
        <Card className={classes.card}>
            <div className={classes.header}>
                {isEdit && (
                    <div className={classes.doneIcon}>
                        <IconButton
                            type="button"
                            className={classes.icon}
                            onClick={updateNote}
                        >
                            <DoneIcon />
                        </IconButton>
                    </div>
                )}

                {isEdit && (
                    <ColorPalette
                        icon={<PaletteIcon />}
                        onClick={changeNoteColor}
                    />
                )}

                <NoteMenu
                    note={note}
                    setIsEdit={setIsEdit}
                    setNotes={setNotes}
                />
            </div>

            <TextField
                className={classes.titleCard}
                onChange={changeTitle}
                placeholder="כותרת"
                multiline
                variant="filled"
                disabled={!isEdit}
                rows={1}
                defaultValue={note.title}
            />

            <TextField
                className={classes.contentCard}
                onChange={changeContent}
                placeholder="תוכן"
                multiline
                variant="filled"
                disabled={!isEdit}
                rows={9}
                defaultValue={note.content}
            />
        </Card>
    );
};

export default NoteItem;
