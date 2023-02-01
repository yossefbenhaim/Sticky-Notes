import { makeStyles } from '@mui/styles';

const usuStyle = makeStyles({
  containerField: {
    height: '216px',
  },
  card: {
    width: '78%',
    height: '95%',
    marginTop: '3%',
    marginLeft: '2%',
    backgroundColor: '#ffff5f',
  },
  titleCard: {
    width: '90%',
    height: '50px',
    '& .MuiInputBase-root': {
      fontWeight: '900',
      backgroundColor: '#ffff5f00',
      marginTop: '-10%',
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

  contentCard: {
    backgroundColor: '#ffff5f00',
    width: '100%',
    height: '116px',
    borderRadius: '0 0 1.5vh 1.5vh ',
    '& .MuiInputBase-root': {
      backgroundColor: '#ffff5f00',
      marginTop: '-10%',
      height: '146px',
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
});

export default usuStyle;
