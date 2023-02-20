import React, { useState } from 'react';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';
import useStyles from './colorPaletteStyle';
import PaletteIcon from '@mui/icons-material/Palette';

interface Props {
    typeIcon: boolean;
    onClick: (color: string) => void;
}
const ColorPalette: React.FC<Props> = (props) => {
    const { onClick, typeIcon } = props;
    const classes = useStyles();
    const [icon, setIcon] = useState<any>(<PaletteIcon />);
    const notesColors = [
        { name: 'ירוק', value: 'rgb(70 217 122)' },
        { name: 'כחול', value: 'rgb(112 130 239)' },
        { name: 'אדום', value: 'rgb(202 40 40)' },
        { name: 'סגול', value: 'rgb(181 58 223)' },
        { name: 'צהוב', value: 'rgb(228 230 140)' },
    ];

    return (
        <SpeedDial
            className={classes.button}
            ariaLabel="SpeedDial basic example"
            icon={icon}
            direction="down"
        >
            {notesColors.map((color) => (
                <SpeedDialAction
                    onClick={() => onClick(color.value)}
                    key={color.name}
                    FabProps={{
                        style: { backgroundColor: color.value },
                    }}
                    tooltipTitle={color.name}
                />
            ))}
        </SpeedDial>
    );
};

export default ColorPalette;
