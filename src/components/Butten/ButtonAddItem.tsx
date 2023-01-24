import { Button } from "@mui/material";
import usuStyle from "./ButtonAddItemStyle";
import Icon from "@mui/material/Icon";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const colors = [
  { icon: <FileCopyIcon />, name: "green", value: "#00ff5a" },
  { icon: <SaveIcon />, name: "blue", value: "#0024ff" },
  { icon: <PrintIcon />, name: "red", value: "#ff0000" },
  { icon: <ShareIcon />, name: "pink", value: "#ff00b1" },
  { icon: <ShareIcon />, name: "yellow", value: "#f9ff00" },
];

const ButtonAddItem = () => {
  const classes = usuStyle();

  return (
    <div>
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            // bottom: 16,
            right: 16,
          }}
          icon={<SpeedDialIcon />}
          direction="up"
        >
          {colors.map((color) => (
            <SpeedDialAction
              key={color.name}
              FabProps={{ style: { backgroundColor: color.value } }}
              icon={undefined}
              tooltipTitle={color.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};

export default ButtonAddItem;
