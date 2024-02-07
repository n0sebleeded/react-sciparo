import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface loginState {
    login?:boolean;
    tempLogin?:boolean
}

const initialState:loginState = {
    login: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action:PayloadAction<loginState>) {
            if (action.payload.tempLogin === false || action.payload.tempLogin === true) {
                state.login = action.payload.tempLogin;
            } else {
                if (action.payload.login === false || action.payload.login === true) {
                    state.login = action.payload.login;
                }
            }
        }
    }
})

export const {setLogin} = loginSlice.actions;
export default loginSlice.reducer;