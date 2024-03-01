import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICardsState, initialState} from "../actionTypes.ts";


const cardSelectSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        setSelectedCard(state, action:PayloadAction<ICardsState>) {
            console.log(action.payload.selectedCard);
            state.selectedCard = action.payload.selectedCard;
        },
        resetSelectedCard(state) {
            state.selectedCard = null;
        },
        setHoveredCard(state, action:PayloadAction<ICardsState>) {
            console.log(action.payload.hoveredCard);
            state.hoveredCard = action.payload.hoveredCard;
        },
        resetHoveredCard(state) {
            state.hoveredCard = null;
        }
    }
})

export const {setSelectedCard, resetSelectedCard, setHoveredCard, resetHoveredCard} = cardSelectSlice.actions;
export default cardSelectSlice.reducer;