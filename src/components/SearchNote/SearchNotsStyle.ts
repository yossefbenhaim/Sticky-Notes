import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  searchNote: {
    backgroundColor: '#ffff5f00',
    width: '50%',

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
    '& .MuiInputBase-root': {
      borderRadius: '30px',
      marginTop: '-8px',
    },
    '& .MuiInputBase-input': {
      marginTop: '-8px',
      paddingBottom: '10px',
    },
    '& .element.style': {
      height: '34px',
      backgroundColor: 'red',
    },
  },
});

export default useStyles;
