import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './NoteMenuStyle';
import NoteInterface from '../NewNots/NoteInterface';

interface Props {
  id: string;
  note: NoteInterface;
  titleNote: string;
  contentNote: string;
  setFlag: (value: boolean) => void;
  setNotes: (value: React.SetStateAction<NoteInterface[]>) => void;
}

const MenuNote = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { id, note, titleNote, contentNote, setFlag, setNotes } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const viewUpDate = () => {
    setFlag(true);
  };

  const myDeleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <IconButton
        className={classes.containerMenu}
        id="long-button"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => myDeleteNote(id)} key={'מחיקה'}>
          מחיקה
        </MenuItem>
        <MenuItem
          key={'עריכה'}
          onClick={() => {
            viewUpDate();
            handleClose();
          }}
        >
          עריכה
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuNote;
