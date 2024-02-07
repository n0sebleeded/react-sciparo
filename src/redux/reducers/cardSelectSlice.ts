import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICardsState, initialState} from "../actionTypes.ts";


const cardSelectSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        setSelectedCard(state, action:PayloadAction<ICardsState>) {
            state.selectedCard = action.payload.selectedCard;
        },
        resetSelectedCard(state) {
            state.selectedCard = null;
        }
    }
})

export const {setSelectedCard, resetSelectedCard} = cardSelectSlice.actions;
export default cardSelectSlice.reducer;