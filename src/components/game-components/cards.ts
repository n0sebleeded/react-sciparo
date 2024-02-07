import {ICard, ICardType} from "../../specs/interfaces.tsx";
import {v4 as uuid} from "uuid";

export const playerCards: ICard[] = [
    { id: uuid(), Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
    { id: uuid(), Text: "Paper", Hidden: false, Type: ICardType.CARD_PAPER },
    { id: uuid(), Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
    { id: uuid(), Text: "Rock", Hidden: false, Type: ICardType.CARD_ROCK },
    { id: uuid(), Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
    { id: uuid(), Text: "Scissor", Hidden: false, Type: ICardType.CARD_SCISSOR },
];

export const enemyCards: ICard[] = [
    { id: uuid(), Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
    { id: uuid(), Text: "Paper", Hidden: true, Type: ICardType.CARD_PAPER },
    { id: uuid(), Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
    { id: uuid(), Text: "Rock", Hidden: true, Type: ICardType.CARD_ROCK },
    { id: uuid(), Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
    { id: uuid(), Text: "Scissor", Hidden: true, Type: ICardType.CARD_SCISSOR },
];