import CardItem from './CardItem';
import './componentsStyles/сardList.css'
import {ICard} from "../specs/interfaces.tsx";

function CardList() {
    const playerCards: ICard[] = [
        { id: 1, Text: "Paper", Hidden: false },
        { id: 2, Text: "Paper", Hidden: false },
        { id: 3, Text: "Rock", Hidden: false },
        { id: 4, Text: "Rock", Hidden: false },
        { id: 5, Text: "Scissor", Hidden: false },
        { id: 6, Text: "Scissor", Hidden: false },
    ];

    const enemyCards: ICard[] = [
        { id: 7, Text: "Paper", Hidden: true },
        { id: 8, Text: "Paper", Hidden: true },
        { id: 9, Text: "Rock", Hidden: true },
        { id: 10, Text: "Rock", Hidden: true },
        { id: 11, Text: "Scissor", Hidden: true },
        { id: 12, Text: "Scissor", Hidden: true },
    ];

    return (
        <>
            <div className="card_container">
                {enemyCards.map((card) => (
                    <CardItem id={card.id} Text={card.Text} Hidden={card.Hidden} />
                ))}
            </div>
            <div className="card_container">
                {playerCards.map((card) => (
                    <CardItem id={card.id} Text={card.Text} Hidden={card.Hidden} />
                ))}
            </div>
        </>
    );
}

export default CardList;
