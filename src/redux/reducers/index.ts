// reducers/index.ts
import { combineReducers } from 'redux';
import { SET_SELECTED_CARD, RESET_SELECTED_CARD, ActionTypes } from '../actionTypes';

interface CardState {
    selectedCard: number | null;
}

const initialState: CardState = {
    selectedCard: null,
};

const cardReducer = (state = initialState, action: ActionTypes): CardState => {
    switch (action.type) {
        case SET_SELECTED_CARD:
            return {
                ...state,
                selectedCard: action.payload.cardId,
            };
        case RESET_SELECTED_CARD:
            return {
                ...state,
                selectedCard: null,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    card: cardReducer,
    // Other reducers
});

export default rootReducer;
