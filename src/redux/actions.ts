import { SET_SELECTED_CARD, RESET_SELECTED_CARD, SetSelectedCardAction, ResetSelectedCardAction } from './actionTypes';

export const setSelectedCard = (cardId: number): SetSelectedCardAction => ({
    type: SET_SELECTED_CARD,
    payload: {
        cardId,
    },
});

export const resetSelectedCard = (): ResetSelectedCardAction => ({
    type: RESET_SELECTED_CARD,
});