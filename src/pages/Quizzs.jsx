import React from 'react';
import QuizzData from "../datas/quizz/quizz.json"
import {Link} from "react-router-dom";
import {Typography, Box} from "@mui/material";

const Quizzs = () => {
    return (<Box sx={{
            display: "flex", justifyContent: "center", alignItem: "center"
        }}>
            {Object.keys(QuizzData).map((x, i) => (<Link key={i} to={`/quizz/${x}`}>
                    <Box
                        sx={{
                            p: 3, m: 2,
                            border: "1px solid #000000", borderRadius: 5
                        }}>
                        <Typography variant="h6">
                            QUIZZ {x}
                        </Typography>
                    </Box>
                </Link>))}
        </Box>);
}

export default Quizzs