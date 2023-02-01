import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyle from './InputSearchNotsStyle';

const InputSearchNots = () => {
  const classes = useStyle();
  return (
    <div>
      <TextField
        className={classes.searchNote}
        id="filled-basic"
        placeholder="SearchNots"
        multiline
        variant="filled"
        disabled={false}
        rows={1}
        defaultValue=""
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default InputSearchNots;
