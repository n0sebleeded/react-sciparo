import {configureStore} from "@reduxjs/toolkit";
import selectCardReducer from "./reducers/cardSelectSlice.ts";
import LoginReduces from "./reducers/loginSlice.ts";

const store = configureStore({
    reducer: {
        selectedCard: selectCardReducer,
        LogIn: LoginReduces,
    }
});

export default store;
