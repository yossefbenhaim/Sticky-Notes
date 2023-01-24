import { TextField } from "@mui/material";
import usuStyle from "./TextFieldStyle";
const TextFeild = () => {
  const classes = usuStyle();
  return (
    <div>
      <TextField
        className={classes.Text}
        id="outlined-basic"
        label="Contect Sticky"
        variant="outlined"
      />
    </div>
  );
};

export default TextFeild;
