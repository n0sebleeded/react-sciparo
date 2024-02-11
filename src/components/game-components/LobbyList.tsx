import '../components-styles/lobby.css';
import React, {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from 'stompjs';
import {ILobby} from "../../specs/interfaces.tsx";
import LobbyItem from "./LobbyItem.tsx";
import axios from "axios";

//TODO: websocket --> long pooling?
const LobbyList:React.FC = () => {

    const [lobbies, setLobbies] = useState<ILobby[] | null>(null)

    const socket = new SockJS('http://192.168.0.103:8080/ws');

    // Создаем объект Stomp
    const stompClient = Stomp.over(socket);

    useEffect(() => {
        console.count("CALLED")
        console.log(lobbies);
        // Создаем SockJS-подключение

        const handleSubscription = (message: Stomp.Message) => {
            console.log(message);
            const received = JSON.parse(message.body);
            setLobbies(received);
        };


        // Подключаемся к серверу
        stompClient.connect({}, () => {
            // Подписываемся на канал '/topic/messages'
            stompClient.send('/app/getLobbies');
            stompClient.subscribe('/topic/lobby', handleSubscription);
        });

        // Закрываем подключение при размонтировании компонента
        return () => {
            stompClient.disconnect(() => console.log("disconnected"));
        };
    }, []);

    /*useEffect(() => {
        const socket = new SockJS('http://192.168.0.103:8080/ws');
        const stompClient = Stomp.over(socket);

        const handleSubscription = (message: Stomp.Message) => {
            const received = JSON.parse(message.body);
            setLobbies(received);
        };

        stompClient.connect({}, function () {
            stompClient.send('/app/getLobbies');
            stompClient.subscribe('/topic/lobby', handleSubscription);

            // Очистка: Отписываемся и закрываем соединение при размонтировании компонента
            return () => {
                stompClient.disconnect(() => {
                    console.log("disconnected");
                });
            };
        });
    }, [lobbies]);*/

    const createLobby = () => {
        const tempData = {
            creatorId: "65c7ed9f9fc6800c8f1c05c2",
            bet: 1000,
            title: "JOPA",
        }

        /*stompClient.send('http://192.168.0.103:8080/lobby/create', {}, JSON.stringify(tempData));*/
        axios.post('http://192.168.0.103:8080/lobby/create', tempData,
            { headers: { 'Content-Type': 'application/json' }})
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    }

    return (
        <div className="container">
            <div className="under-container">
                <div className="lobby-list">
                    {lobbies && lobbies.map((lobby) => (
                        <LobbyItem key={lobby.id} id={lobby.id}
                                   bet={lobby.bet}
                                   creatorUsername={lobby.creatorUsername}
                                   elo={lobby.creatorElo}
                                   title={lobby.title}
                        />
                    ))
                    }
                </div>
                <button onClick={createLobby}>create lobby</button>
            </div>
        </div>
    );
};

export default LobbyList;