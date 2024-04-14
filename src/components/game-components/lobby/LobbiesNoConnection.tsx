import React from 'react';
import "../../components-styles/lobbies.css"
import {Typography} from "@mui/material";

const LobbiesNoConnection:React.FC = () => {
    return (
        <>
            <div className="lobbies-container">
                <Typography className="lobbies-text" sx={{fontSize: "24pt"}}>
                    ERROR: no internet connection found<br/>
                    or no access to the server😔.<br/>
                    Please try again later.
                </Typography>
                <img className="lobbies-pic" src="../../src/assets/no_connection.png" alt="no_connection"/>
            </div>
        </>
    );
};

export default LobbiesNoConnection;