import usuStyle from './ButtonAddItemStyle';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const colors = [
  { name: 'green', value: '#00ff5a' },
  { name: 'blue', value: '#0024ff' },
  { name: 'red', value: '#ff0000' },
  { name: 'pink', value: '#ff00b1' },
  { name: 'yellow', value: '#f9ff00' },
];

interface Props {
  onClick: (color: string) => void;
}
const ButtonAddItem = (props: Props) => {
  const classes = usuStyle();
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

export default ButtonAddItem;
