import React from 'react';
import {Box} from "@mui/material";

const BarTimer = ({value, maxValue}) => {
    return (
        <Box sx={{flex: 1, margin: 5, height: "10px", borderRadius: 5, backgroundColor: "#d7d7d7", overflow: "hidden"}}>
            <Box sx={{height: "100%", width: `${value*100/maxValue}%`, transition: "width 1s", backgroundColor: "#8498e5" }}/>
        </Box>
    );
}

export default BarTimer