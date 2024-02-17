import {ICard, ICardType} from "../../specs/interfaces.tsx";

export const playerCards: ICard[] = [
    { id: 1, Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
    { id: 2, Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
    { id: 3, Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
    { id: 4, Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
    { id: 5, Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
    { id: 6, Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
];

export const enemyCards: ICard[] = [
    { id: 7, Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
    { id: 8, Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
    { id: 9, Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
    { id: 10, Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
    { id: 11, Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
    { id: 12, Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
];