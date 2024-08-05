import { createSlice } from "@reduxjs/toolkit";
import { authApi, ResponseUserData } from "../../services/auth";

interface InitialState {
    user: ResponseUserData | null;
    isAuth: boolean;
}

const initialState: InitialState = {
    user: null,
    isAuth: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuth = true;
                }
            )
            .addMatcher(
                authApi.endpoints.register.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuth = true;
                }
            )
            .addMatcher(
                authApi.endpoints.current.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuth = true;
                }
            );
    },
});

export const { logout } = slice.actions;
export default slice.reducer;
