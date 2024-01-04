import { ICard } from "../specs/interfaces.tsx";

function Card({Text, Amount}:ICard) {
    const cardArray = Array.from({length: Amount}, (_, index) => (
        <div key={index} className="card">
            <p className="card_text">{Text}</p>
        </div>
    ));

    return (
        <>
            { cardArray }
        </>
    )
}

export default Card;