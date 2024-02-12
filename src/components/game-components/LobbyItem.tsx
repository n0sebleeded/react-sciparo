import {ILobbyProps} from "../../specs/interfaces.tsx";
import React from "react";
import '../components-styles/lobby-item.css';
import {TableBody, TableCell, TableRow} from "@mui/material";

const LobbyItem:React.FC<ILobbyProps> = ({id, bet, creatorUsername, elo, title}) => {
    return (
        <TableBody>
            <TableRow key={id}>
                <TableCell>{bet}</TableCell>
                <TableCell>{creatorUsername}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{elo}</TableCell>
            </TableRow>
        </TableBody>
    );
};

export default LobbyItem;