import Box from '@mui/material/Box';
import Note from 'models/interfaces/Note';
import { v4 as uuidV4 } from 'uuid';
import ColorPalette from '../colorPalette/colorPalette';
import useStyles from './addNoteStyle';
import AddIcon from '@mui/icons-material/Add';

const getDeafultNote = (color: string) => ({
    id: uuidV4(),
    title: '',
    content: '',
    color,
});

interface Props {
    setNotes: (value: React.SetStateAction<Note[]>) => void;
}

const AddNote: React.FC<Props> = (props) => {
    const { setNotes } = props;
    const classes = useStyles();

    const addNote = (color: string) => {
        setNotes((prevNotes) => [getDeafultNote(color), ...prevNotes]);
    };

    return (
        <Box className={classes.butten}>
            <ColorPalette icon={<AddIcon />} onClick={addNote} />
        </Box>
    );
};

export default AddNote;
