import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import {resetSelectedCard, setSelectedCard} from "../../redux/reducers/cardSelectSlice.ts";
import { ICard, ICardType, ICords } from "../../specs/interfaces.tsx";
import '../components-styles/card.css';
import {IRootStateCard} from "../../redux/actionTypes.ts";
import * as SockJS from "sockjs-client";
import Stomp from 'stompjs';
import axios from "axios";


//FIXME: mouse cursor:pointer
//FIXME: selected card on resize

window.global ||= window;

const CardItem: React.FC<ICard> = ({ id, Text, Hidden, Type }) => {
    const [cardState, setCardState] = useState({
        isAnimating: false,
        isHovering: false,
        cardCords: { x: 0, y: 0 },
    });

    const centerCoords = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };

    const getCardCords = (element: HTMLDivElement | null): ICords => {
        const rect = element?.getBoundingClientRect();
        return {
            x: rect ? rect.left + (rect.right - rect.left) / 2 - rect.width : 0,
            y: rect ? (rect.bottom < 1 ? 1 : rect.bottom + (rect.top - rect.bottom) / 2) : 0,
        };
    };

    const renderCardImage = (type: ICardType): React.ReactNode => (
        <img className="pic"
             src={`../../src/assets/${type.toLowerCase()}.svg`}
             alt={type.toLowerCase()} />
    );
    const dispatch = useDispatch();
    const selectedCard = useSelector((state: IRootStateCard) => state.selectedCard.selectedCard);

    const isClicked = selectedCard === id;

    const handleClick = () => {
        if (selectedCard === null) {
            const selectedCard = id;
            dispatch(setSelectedCard({selectedCard}));
        } else if (isClicked) {
            dispatch(resetSelectedCard());
            setCardState(prevState => ({ ...prevState, isHovering: false }));
        }
    };

    const ref = useRef<HTMLDivElement | null>(null);

/*    useEffect(() => {
        fetch('http://192.168.0.103:8080/lobby/getAll')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        console.log("жопа");
    }, []);*/

    useEffect(() => {
        setCardState(prevState => ({ ...prevState, cardCords: getCardCords(ref.current) }));
    }, [ref]);

    useEffect(() => {
        const handleResize = () => {
            setCardState(prevState => ({ ...prevState, cardCords: getCardCords(ref.current) }));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [ref]);

    useEffect(() => {
        if (isClicked || Hidden) return;

        setCardState(prevState => ({ ...prevState, isAnimating: true }));
        const animationTimeout = setTimeout(() =>
                setCardState(prevState => ({ ...prevState, isAnimating: false })),
            500);

        return () => clearTimeout(animationTimeout);
    }, [isClicked, Hidden]);

    const cardStyle = {
        transform: cardState.isAnimating ? 'none' : '',
    };

    return (
        <motion.div
            ref={ref}
            className="card"
            drag={!Hidden && !isClicked}
            animate={{
                x: isClicked && !Hidden ? centerCoords.x - cardState.cardCords.x : 0,
                y: isClicked && !Hidden ? centerCoords.y - cardState.cardCords.y : cardState.isHovering && !Hidden ? "-40px" : 0,
            }}
            transition={{ type: "spring", duration: 0.05 }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            key={id}
            onClick={!Hidden ? handleClick : undefined}
            onMouseEnter={() => {
                setCardState(prevState =>
                    ({ ...prevState, isHovering: true }))
                console.log(id);
            }}
            onMouseLeave={() => setCardState(prevState =>
                ({ ...prevState, isHovering: false }))}
            style={cardStyle}
        >
            {!Hidden && (
                <motion.div className="card_item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y:-100}}
                    transition={{duration: 1, type: "spring"}}
                >
                    {renderCardImage(Type)}
                    <p className="card_text">{Text}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default CardItem;
