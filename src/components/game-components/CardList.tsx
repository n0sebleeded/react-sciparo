import CardItem from './CardItem.tsx';
import '../components-styles/сardList.css'
import {ICard} from "../../specs/interfaces.tsx";
import {enemyCards, playerCards} from "./cards.ts";
import {useEffect} from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import {useDispatch} from "react-redux";
import {
    resetHoveredCard,
    resetSelectedCard,
    setHoveredCard,
    setSelectedCard
} from "../../redux/reducers/cardSelectSlice.ts";

function shuffle(array: ICard[]): ICard[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function CardList() {
    const SERVER_PORT = import.meta.env.VITE_REACT_APP_SERVER_PORT;
    const SERVER_IP = import.meta.env.VITE_REACT_APP_SERVER_IP;

    const socket = new SockJS(`${SERVER_IP}:${SERVER_PORT}/ws`);
    const stompClient = Stomp.over(socket);

    const dispatch = useDispatch();
    const shuffledPlayerCards:ICard[] = shuffle(playerCards);
    const shuffledEnemyCard:ICard[] = shuffle(enemyCards);

    useEffect(() => {
        console.count("CALLED")

        const handleSubscription = (message: Stomp.Message) => {
            const received = JSON.parse(message.body);

            console.log(received.hoveredCard, received.selectedCard)

            if (received.hoveredCard) {
                dispatch(setHoveredCard({hoveredCard: received.hoveredCard}));
            } else if (received.hoveredCard == null) {
                dispatch(resetHoveredCard());
            }

            if (received.selectedCard) {
                dispatch(setSelectedCard({selectedCard: received.selectedCard}));
            } else if (received.selectedCard == null) {
                dispatch(resetSelectedCard())
            }
        };


        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/testing', handleSubscription);
        });

        // Закрываем подключение при размонтировании компонента
        return () => {
            stompClient.disconnect(() => console.log("disconnected"));
        };
    }, []);

    return (
        <div className="all_cards_container">
            <div className="card_container">
                {shuffledEnemyCard.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} stompClient={stompClient}/>
                ))}
            </div>
            <div className="card_container">
                {shuffledPlayerCards.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} stompClient={stompClient}/>
                ))}
            </div>
        </div>
    );
}

export default CardList;
