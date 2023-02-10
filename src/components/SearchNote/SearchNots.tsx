import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './SearchNotsStyle';

const SearchNots = () => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.searchNote}
        id="filled-basic"
        placeholder="חיפוש"
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

export default SearchNots;
