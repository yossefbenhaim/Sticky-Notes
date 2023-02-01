import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  containerFilde: {
    width: '100%',
  },
  conatainerHeader: {
    backgroundColor: '#d5e04087',
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInputSearchNots: {
    width: '89%',
    direction: 'rtl',
    alignSelf: 'center',
  },
  containetrButtonAddNote: {
    width: '10%',
    alignSelf: 'center',
  },

  conatainerBody: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default useStyles;
