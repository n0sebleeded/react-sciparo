import { ICard, ICords } from "../specs/interfaces.tsx";
import './componentsStyles/card.css'
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCard, setSelectedCard } from "../redux/actions.ts";

function CardItem({id, Text, Hidden}:ICard) {
    const [isHovered, setHovered] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [cardCords, setCardCords] = useState<ICords>({
        x: 0,
        y: 0
    });
    const centerCoords:ICords = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };
    const dispatch = useDispatch();
    const selectedCard = useSelector((state: any) => state.card.selectedCard);

    const handleClick = () => {
        if (selectedCard === null) {
            dispatch(setSelectedCard(id));
            setClicked(true);
        } else if (selectedCard === id) {
            dispatch(resetSelectedCard());
            setClicked(false);
        }
    };
    const ref = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const cords:ICords = {
                x: rect.left + (rect.right - rect.left) / 2 - rect.width,
                y: rect.bottom + (rect.top - rect.bottom) / 2
            }
            setCardCords(cords);
        }
    }, [ref]);

    const customStyle = {
        cursor: !Hidden ? 'pointer' : 'default',
    };

    return (
        <motion.div
            ref={ref}
            className="card"
            drag={!Hidden}
            animate={{
                x: isClicked && !Hidden ? centerCoords.x - cardCords.x : 0,
                y: isClicked && !Hidden ? centerCoords.y - cardCords.y : isHovered && !Hidden ? "-40px" : 0,
            }}
            transition={{type:"spring", duration: 0.05}}
            dragConstraints={{
                top:0,
                bottom:0,
                left: 0,
                right: 0,
            }}
            key={id}

            onClick={!Hidden ? handleClick : undefined}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={customStyle}
        >
            {!Hidden && <p>{Text}</p>}
            <p className="card_text">{id}</p>
        </motion.div>
    );
}

export default CardItem;