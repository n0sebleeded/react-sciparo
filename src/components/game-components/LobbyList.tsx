import '../components-styles/lobby.css';
import React, {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from 'stompjs';
import {ILobby} from "../../specs/interfaces.tsx";
import LobbyItem from "./LobbyItem.tsx";
import axios from "axios";
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ButtonSty from '../styled-components/ButtonSty.ts';
import ContainerSty from "../styled-components/ContainerSty.ts";
import ContainerStyButton from "../styled-components/ContainerStyButton.ts";

const LobbyList:React.FC = () => {
    const SERVER_PORT = import.meta.env.VITE_REACT_APP_SERVER_PORT;
    const SERVER_IP = import.meta.env.VITE_REACT_APP_SERVER_IP;

    const [lobbies, setLobbies] = useState<ILobby[] | null>([]);
    const socket = new SockJS(`${SERVER_IP}:${SERVER_PORT}/ws`);

    // Создаем объект Stomp
    const stompClient = Stomp.over(socket);
    stompClient.debug = () => {};

    useEffect(() => {
        console.count("CALLED")
        // Создаем SockJS-подключение

        const handleSubscription = (message: Stomp.Message) => {
            const received = JSON.parse(message.body);
            setLobbies(received.body.lobbies);
        };


        stompClient.connect({}, () => {
            stompClient.send('/app/lobbies/list');
            stompClient.subscribe('/topic/lobby', handleSubscription);
        });

        // Закрываем подключение при размонтировании компонента
        return () => {
            stompClient.disconnect(() => console.log("disconnected"));
        };
    }, []);

    const createLobby = () => {
        const tempData = {
            creatorId: "65c666dbc08b5a5f3dd084f1",
            bet: 1000,
            title: "JOPA",
        }
        console.log(lobbies);

        /*stompClient.send('http://192.168.0.103:8080/lobby/create', {}, JSON.stringify(tempData));*/
        axios.post(`${SERVER_IP}:${SERVER_PORT}/lobbies/new`, tempData,
            { headers: { 'Content-Type': 'application/json' }})
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    }

    return (
        <div className="container">
            <div className="under-container">
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
            </div>
        </div>
    );
};

export default LobbyList;