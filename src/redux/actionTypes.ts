export interface ICardsState {
    selectedCard: string | null;
}

export const initialState:ICardsState = {
    selectedCard: null
}

export interface IRootStateCard {
    selectedCard: {
        selectedCard: string | null
    }
}

export interface IRootStateLogin {
    LogIn: {
        login: boolean
    }
}