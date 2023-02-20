import React, { Dispatch, SetStateAction } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './noteMenuStyle';
import Note from '../../interfaces/Note';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
interface Props {
    note: Note;
    setFlag: Dispatch<SetStateAction<boolean>>;
    setNotes: (value: React.SetStateAction<Note[]>) => void;
}

const NoteMenu: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { note, setFlag, setNotes } = props;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const viewUpDate = () => {
        setFlag(true);
    };

    const myDeleteNote = () => {
        setNotes((prevNotes) =>
            prevNotes.filter((item) => item.id !== note.id)
        );
    };

    return (
        <>
            <IconButton
                className={classes.Menu}
                id="long-button"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => myDeleteNote()}>
                    <DeleteOutlineIcon className={classes.icons} /> מחיקה
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        viewUpDate();
                        handleClose();
                    }}
                >
                    <EditIcon className={classes.icons} />
                    עריכה
                </MenuItem>
            </Menu>
        </>
    );
};

export default NoteMenu;
