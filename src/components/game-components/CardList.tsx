import CardItem from './CardItem.tsx';
import '../components-styles/сardList.css'
import {ICard, ICardType} from "../../specs/interfaces.tsx";
import {v4 as uuid} from "uuid";

function CardList() {
    const playerCards: ICard[] = [
        { id: uuid(), Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
        { id: uuid(), Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
        { id: uuid(), Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
        { id: uuid(), Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
        { id: uuid(), Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
        { id: uuid(), Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
    ];

    const enemyCards: ICard[] = [
        { id: uuid(), Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
        { id: uuid(), Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
        { id: uuid(), Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
        { id: uuid(), Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
        { id: uuid(), Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
        { id: uuid(), Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
    ];

    return (
        <div className="all_cards_container">
            <div className="card_container">
                {enemyCards.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} />
                ))}
            </div>
            <div className="card_container">
                {playerCards.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type} />
                ))}
            </div>
        </div>
    );
}

export default CardList;
