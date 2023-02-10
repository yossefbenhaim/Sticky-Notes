import useStyles from './AddButtonNoteStyle';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const colors = [
  { name: 'ירוק', value: 'rgb(70 217 122)' },
  { name: 'כחול', value: 'rgb(112 130 239)' },
  { name: 'אדום', value: 'rgb(202 40 40)' },
  { name: 'סגול', value: 'rgb(181 58 223)' },
  { name: 'צהוב', value: 'rgb(228 230 140)' },
];

interface Props {
  onClick: (color: string) => void;
}
const AddButtonItem = (props: Props) => {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <div>
      <Box>
        <SpeedDial
          className={classes.buttenStyly}
          ariaLabel="SpeedDial basic example"
          sx={{
            float: 'right',
            right: 19,
          }}
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {colors.map((color) => (
            <SpeedDialAction
              onClick={() => onClick(color.value)}
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

const addNote = (color: string) => {
  console.log('hiii');
};

export default AddButtonItem;
