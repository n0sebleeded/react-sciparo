/*
export interface ICard extends ICardGroup{
    Text:string,
    Hidden:boolean
}

export interface ICardGroup {
    PlayerSide: boolean,
}*/

export interface ICard {
    id: number,
    Text: string,
    Hidden: boolean,
    Type:ICardType
}

export interface ICords {
    x:number,
    y:number
}

export interface IFormData {
    username: string;
    password: string;
    email: string;
}

export enum ICardType {
    CARD_PAPER = "CARD_PAPER",
    CARD_SCISSOR = "CARD_SCISSOR",
    CARD_ROCK = "CARD_ROCK"
}
