export interface ICardsState {
    selectedCard?: number | null;
    hoveredCard?: number | null;
}

export const initialState:ICardsState = {
    selectedCard: null,
    hoveredCard: null
}

export interface IRootStateCard {
    selectedCard: {
        selectedCard: number | null
        hoveredCard: number | null
    }
}

export interface IRootStateLogin {
    LogIn: {
        login: boolean
    }
}

export interface IRootStateBurger {
    burger: {
        isOpen: boolean
    }
}