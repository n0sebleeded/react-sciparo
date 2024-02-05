import CardItem from './CardItem.tsx';
import '../components-styles/сardList.css'
import {ICard, ICardType} from "../../specs/interfaces.tsx";

function CardList() {
    const playerCards: ICard[] = [
        { id: 1, Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
        { id: 2, Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
        { id: 3, Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
        { id: 4, Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
        { id: 5, Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
        { id: 6, Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
    ];

    const enemyCards: ICard[] = [
        { id: 7, Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
        { id: 8, Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
        { id: 9, Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
        { id: 10, Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
        { id: 11, Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
        { id: 12, Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
    ];

    return (
        <div className="all_cards_container">
            <div className="card_container">
                {enemyCards.map((card) => (
                    <CardItem id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} />
                ))}
            </div>
            <div className="card_container">
                {playerCards.map((card) => (
                    <CardItem id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} />
                ))}
            </div>
        </div>
    );
}

export default CardList;
