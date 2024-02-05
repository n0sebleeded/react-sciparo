/*
export interface ICard extends ICardGroup{
    Text:string,
    Hidden:boolean
}

export interface ICardGroup {
    PlayerSide: boolean,
}*/

import {ReactNode} from "react";
import {UseFormRegister} from "react-hook-form";

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

export interface INotification {
    state: boolean,
    success: boolean
}

export interface IForm {
    login?: boolean,
    register:UseFormRegister<IFormData> | null
}

export interface IProps {
    children: ReactNode;
}

export interface IFormData {
    username: string;
    passwordText: string;
    email: string;
}

export enum ICardType {
    CARD_PAPER = "CARD_PAPER",
    CARD_SCISSOR = "CARD_SCISSOR",
    CARD_ROCK = "CARD_ROCK"
}