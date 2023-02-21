import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#eef679',
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'sticky',
        zIndex: '100',
        top: '0',
    },
    searchNotesContainer: {
        width: '89%',
        direction: 'rtl',
        alignSelf: 'center',
    },
    addNoteContainetr: {
        width: '8%',
        height: '46px',
        alignSelf: 'center',
    },

    body: {
        width: '90%',
        height: '100%',
        display: 'flex',
        direction: 'rtl',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'right',
    },
});

export default useStyles;
