import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  buttenStyly: {
    marginRight: '30%',
    marginTop: '2%',
    height: '50px',
    position: 'relative',

    '& .MuiButtonBase-root': {
      minHeight: '39px',
      height: '25px',
      width: '40px',
      backgroundColor: 'black',
    },
  },
});

export default useStyles;
