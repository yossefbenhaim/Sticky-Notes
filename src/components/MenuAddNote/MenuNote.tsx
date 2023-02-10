import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './MenuNoteStyle';
import NoteInterface from '../NewNots/NoteInterface';

interface Props {
  setFlag: (value: boolean) => void;
  id: string;
  setNotes: (value: React.SetStateAction<NoteInterface[]>) => void;
}

const options = ['עריכה', 'מחיקה'];

const ITEM_HEIGHT = 48;
const MenuNote = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setNotes, id } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const viewUpDate = () => {
    props.setFlag(false);
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
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
