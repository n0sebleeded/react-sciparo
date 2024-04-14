import '../../components-styles/lobby.css';
import React, {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from 'stompjs';
import {ILobby} from "../../../specs/interfaces.tsx";
import LobbiesTable from "./LobbiesTable.tsx";
import LobbiesNoConnection from "./LobbiesNoConnection.tsx";

const LobbyList:React.FC = () => {
    const SERVER_PORT = import.meta.env.VITE_REACT_APP_SERVER_PORT;
    const SERVER_IP = import.meta.env.VITE_REACT_APP_SERVER_IP;
    const [lobbies, setLobbies] = useState<ILobby[] | null>([]);
    const socket = new SockJS(`${SERVER_IP}:${SERVER_PORT}/ws`);
    const stompClient = Stomp.over(socket);
    stompClient.debug = () => {};

    useEffect(() => {
        console.count("CALLED")
        const handleSubscription = (message: Stomp.Message) => {
            const received = JSON.parse(message.body);
            setLobbies(received.body.lobbies);
        };

        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/lobby', handleSubscription);
            stompClient.send('/app/lobbies/list');
        });

        return () => {
            stompClient.disconnect(() => console.log("disconnected"));
        };
    }, []);

    return (
        <div className="container">
            <div className="under-container">
                {lobbies && lobbies.length
                    ?   <LobbiesTable lobbies={lobbies} />
                    :   <LobbiesNoConnection />
                }
            </div>
        </div>
    );
};

export default LobbyList;