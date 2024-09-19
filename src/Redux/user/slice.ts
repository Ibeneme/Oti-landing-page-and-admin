import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

interface Admin {
    email: string
}

interface InitialState {
    token: string | null;
    user: Admin | null;
}

const initialState: InitialState = {
    token: localStorage.getItem("token") ?? null,
    user: null,
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetAuth(state) {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload, meta }) => {
                console.log(payload);
                const { token } = payload;
                state.token = token;
                localStorage.setItem("token", token);
                state.user = {
                    email: meta.arg.originalArgs.email
                }

            }
        );
    },
});

export const { resetAuth } = userSlice.actions;
