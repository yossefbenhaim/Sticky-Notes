import useStyles from './AddNoteButtonStyle';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NoteInterface from '../NewNots/NoteInterface';
import { v4 as uuidV4 } from 'uuid';

const notesColors = [
  { name: 'ירוק', value: 'rgb(70 217 122)' },
  { name: 'כחול', value: 'rgb(112 130 239)' },
  { name: 'אדום', value: 'rgb(202 40 40)' },
  { name: 'סגול', value: 'rgb(181 58 223)' },
  { name: 'צהוב', value: 'rgb(228 230 140)' },
];

interface Props {
  setNotes: (value: React.SetStateAction<NoteInterface[]>) => void;
  notes: NoteInterface[];
}

const addNoteButton = (props: Props) => {
  const classes = useStyles();

  const { notes, setNotes } = props;

  const addNote = (color: string) => {
    setNotes([
      {
        id: uuidV4(),
        title: '',
        content: '',
        color: color,
      },
      ...notes,
    ]);
  };

  return (
    <div>
      <Box>
        <SpeedDial
          className={classes.buttenStyly}
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {notesColors.map((color) => (
            <SpeedDialAction
              onClick={() => addNote(color.value)}
              key={color.name}
              FabProps={{ style: { backgroundColor: color.value } }}
              icon={undefined}
              tooltipTitle={color.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};

export default addNoteButton;
