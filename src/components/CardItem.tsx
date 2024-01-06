import {ICard, ICords} from "../specs/interfaces.tsx";
import './componentsStyles/card.css'
import {useEffect, useRef, useState} from "react";
import {motion } from "framer-motion";

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
    console.log(centerCoords)
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const cords:ICords = {
                x: rect.left + (rect.right - rect.left) / 2 - rect.width,
                y: rect.bottom + (rect.top - rect.bottom) / 2
            }
            console.log(rect)
            setCardCords(cords);
        }
    }, [ref]);

    return (
        <motion.div
            ref={ref}
            className="card"
            drag={!Hidden}
            animate={{
                x: isClicked && !Hidden ? centerCoords.x - cardCords.x : 0,
                y: isClicked && !Hidden ? centerCoords.y - cardCords.y : 0,
            }}
            transition={{type:"spring", duration: 0.05}}
            dragConstraints={{
                top:0,
                bottom:0,
                left: 0,
                right: 0,
            }}
            key={id}
            onClick={() => setClicked((prevState) => !prevState)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transform: isHovered && !Hidden ? "translateY(-40px)" : "none",
            }}
        >
            {!Hidden && <p>{Text}</p>}
            <p className="card_text">{id}</p>
        </motion.div>
    );
}

export default CardItem;