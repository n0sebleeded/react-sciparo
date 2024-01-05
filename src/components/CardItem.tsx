import {ICard} from "../specs/interfaces.tsx";
import './componentsStyles/card.css'
import {useState} from "react";

function CardItem({id, Text, Hidden}:ICard) {

    const [isHover, setHover] = useState(false);
    return (
        <div className={ isHover && !Hidden ? "card_on_hover" : "card" }
             key={id}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            {!Hidden && <p>{Text}</p>}
            <p>{id}</p>
        </div>
    );
}

export default CardItem;