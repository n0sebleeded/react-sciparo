export interface ICardsState {
    selectedCard: number | null;
}

export const initialState:ICardsState = {
    selectedCard: null
}

export interface IRootStateCard {
    selectedCard: {
        selectedCard: number | null
    }
}

export interface IRootStateLogin {
    LogIn: {
        login: boolean
    }
}