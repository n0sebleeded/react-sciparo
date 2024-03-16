import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: burgerState = {
    isOpen: false
}

interface burgerState {
    isOpen: boolean
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setBurger(state, action:PayloadAction<burgerState>) {
            state.isOpen = action.payload.isOpen;
        }
    }
})

export const {setBurger} = burgerSlice.actions;
export default burgerSlice.reducer;