import React from 'react';
import ContainerSty from "../../styled-components/ContainerSty.ts";
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import LobbyItem from "./LobbyItem.tsx";
import ContainerStyButton from "../../styled-components/ContainerStyButton.ts";
import ButtonSty from "../../styled-components/ButtonSty.ts";
import {ILobby} from "../../../specs/interfaces.tsx";
import axios from "axios";

interface LobbiesTableProps {
    lobbies: ILobby[],
}

const LobbiesTable:React.FC<LobbiesTableProps> = ({lobbies}) => {
    const SERVER_PORT = import.meta.env.VITE_REACT_APP_SERVER_PORT;
    const SERVER_IP = import.meta.env.VITE_REACT_APP_SERVER_IP;

    const createLobby = () => {
        const tempData = {
            creatorId: "65c666dbc08b5a5f3dd084f1",
            bet: 1000,
            title: "JOPA",
        }
        console.log(lobbies);

        axios.post(`${SERVER_IP}:${SERVER_PORT}/lobbies/new`, tempData,
            { headers: { 'Content-Type': 'application/json' }})
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    }

    return (
        <>
            <ContainerSty>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Bet</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Creator Username</TableCell>
                                <TableCell>Elo</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            lobbies && lobbies.length &&
                            lobbies.map((lobby) => (
                                <LobbyItem key={lobby.id} id={lobby.id}
                                           bet={lobby.bet}
                                           creatorUsername={lobby.creatorUsername}
                                           elo={lobby.creatorElo}
                                           title={lobby.title}
                                />
                            ))
                        }
                    </Table>
                </TableContainer>
            </ContainerSty>
            <ContainerStyButton>
                <ButtonSty onClick={createLobby}>Create lobby</ButtonSty>
            </ContainerStyButton>
        </>
    );
};

export default LobbiesTable;