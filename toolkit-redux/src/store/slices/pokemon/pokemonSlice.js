import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, action) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action);
        },
    },
});

export const { increment } = pokemonSlice.actions;
