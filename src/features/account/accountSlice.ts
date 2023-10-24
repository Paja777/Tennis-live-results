import {  createSlice } from "@reduxjs/toolkit";

import { router } from "../../routes/Router";


interface AccountState {
    username: string;
    email: string;
    password: string;
    userLoggedIn: boolean;
}

const initialState: AccountState = {
    username: !!localStorage.getItem('user')? (JSON.parse(localStorage.getItem('user')!).username) : " ",
    email: !!localStorage.getItem('user')? (JSON.parse(localStorage.getItem('user')!).email) : " ",
    password: !!localStorage.getItem('user')? (JSON.parse(localStorage.getItem('user')!).password) : " ",
    userLoggedIn: !!localStorage.getItem('user'),
}


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        signOut: (state) => {
            state.email = '';
            state.password = '';
            state.userLoggedIn = false;
            localStorage.removeItem('user');
            router.navigate('/');
        },
        setUser: (state, {payload}) => {
            state.username = payload.username;
            state.email = payload.email;
            state.password = payload.password;
            state.userLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(
                state
            ))
        }
    },
    
})

export const {signOut, setUser} = accountSlice.actions;