import CardItem from './CardItem.tsx';
import '../components-styles/сardList.css'
import {ICard} from "../../specs/interfaces.tsx";
import {enemyCards, playerCards} from "./cards.ts";

function shuffle(array: ICard[]): ICard[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function CardList() {
    const shuffledPlayerCards:ICard[] = shuffle(playerCards);
    const shuffledEnemyCard:ICard[] = shuffle(enemyCards);

    return (
        <div className="all_cards_container">
            <div className="card_container">
                {shuffledEnemyCard.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type}/>
                ))}
            </div>
            <div className="card_container">
                {shuffledPlayerCards.map((card) => (
                    <CardItem key={card.id} id={card.id} Text={card.Text} Hidden={card.Hidden} Type={card.Type}/>
                ))}
            </div>
        </div>
    );
}

export default CardList;
