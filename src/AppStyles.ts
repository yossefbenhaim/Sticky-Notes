import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    header: {
        backgroundColor: '#d5e04087',
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchNotesContainer: {
        width: '89%',
        direction: 'rtl',
        alignSelf: 'center',
    },
    addNoteContainetr: {
        width: '91px',
        height: '46px',
        alignSelf: 'center',
    },

    body: {
        width: '93%',
        height: '100%',
        display: 'flex',
        direction: 'rtl',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'right',
    },
});

export default useStyles;
