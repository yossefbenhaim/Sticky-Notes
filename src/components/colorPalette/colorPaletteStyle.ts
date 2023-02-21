import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        height: '39px',
        zIndex: '1',

        '& .MuiButtonBase-root': {
            minHeight: '39px',
            height: '39px',
            width: '39px',
            backgroundColor: '#3b2c2c63',
            boxShadow:
                '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 0%), 0px 1px 18px 0px rgb(0 0 0 / 0%)',
            color: 'black',
        },
    },
});

export default useStyles;
