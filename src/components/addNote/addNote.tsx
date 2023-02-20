import Box from '@mui/material/Box';
import Note from '../../interfaces/Note';
import { v4 as uuidV4 } from 'uuid';
import ColorPalette from '../colorPalette/colorPalette';
import useStyles from './addNoteStyle';

interface Props {
    setNotes: (value: React.SetStateAction<Note[]>) => void;
}

const AddNote: React.FC<Props> = (props) => {
    const { setNotes } = props;
    const classes = useStyles();

    const getDeafultNote = (color: string) => ({
        id: uuidV4(),
        title: '',
        content: '',
        color,
    });

    const addNote = (color: string) => {
        setNotes((prevNotes) => [getDeafultNote(color), ...prevNotes]);
    };

    return (
        <Box className={classes.butten}>
            <ColorPalette typeIcon={false} onClick={addNote} />
        </Box>
    );
};

export default AddNote;
