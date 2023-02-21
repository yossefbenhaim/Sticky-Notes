import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
    color: string;
}

const useStyles = makeStyles<Theme, Props>({
    card: {
        width: '360px',
        height: '350px',
        margin: '1%',
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: ({ color }) => color,
    },
    header: {
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        height: '43px',
    },
    doneIcon: {
        float: 'left',
    },
    icon: {
        float: 'left',
        marginLeft: '3%',
    },
    titleCard: {
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

    contentCard: {
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
});

export default useStyles;
