import {configureStore} from "@reduxjs/toolkit";
import selectCardReducer from "./reducers/cardSelectSlice.ts";
import LoginReduces from "./reducers/loginSlice.ts";
import burgerReducer from "./reducers/burgerSlice.ts";

const store = configureStore({
    reducer: {
        selectedCard: selectCardReducer,
        LogIn: LoginReduces,
        burger: burgerReducer
    }
});

export default store;
