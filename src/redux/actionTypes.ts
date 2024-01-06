// actionTypes.ts
export const SET_SELECTED_CARD = 'SET_SELECTED_CARD';
export const RESET_SELECTED_CARD = 'RESET_SELECTED_CARD';

export type SetSelectedCardAction = {
    type: typeof SET_SELECTED_CARD;
    payload: {
        cardId: number;
    };
};

export type ResetSelectedCardAction = {
    type: typeof RESET_SELECTED_CARD;
};

export type ActionTypes = SetSelectedCardAction | ResetSelectedCardAction;
