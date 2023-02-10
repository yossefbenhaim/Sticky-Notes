import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
  color: string;
}

const useStyles = makeStyles<Theme, Props>({
  containerField: {
    width: 'auto',
    height: 'auto',
    margin: '1%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: ({ color }) => color,
  },
  cardTitle: {
    '& .MuiInputBase-root': {
      backgroundColor: '#ffff5f00',
      direction: 'rtl',
    },
    '& .MuiInputBase-root:before': {
      borderBottom: '0px',
      content: 'none',
      right: '0',
    },
    '& .MuiInputBase-root:after': {
      borderBottom: '0px',
      content: 'none',
      right: '0',
    },
  },
  containerMenuAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardContent: {
    backgroundColor: '#ffff5f00',
    width: '100%',
    height: 'auto',
    borderRadius: '0 0 1.5vh 1.5vh ',
    '& .MuiInputBase-root': {
      backgroundColor: '#ffff5f00',
      direction: 'rtl',
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: '0px',
      content: 'none',
      right: '0',
    },
    '& .MuiInputBase-root:before': {
      borderBottom: '0px',
      content: 'none',
      right: '0',
    },
  },
  icon: {
    float: 'left',
    /* display: none; */
    marginLeft: '3%',
  },

  doneIcon: {
    float: 'left',
  },
});

export default useStyles;
