import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
    _id: new Date().getTime(),
    title: "croissant con fokin cafe",
    notes: "hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "fafafa",
    user: {
        _id: "123",
        name: "alex",
    },
};

export const calendarSlice = createSlice({
    name: "calendarSlice",
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
    },
});

export const { onSetActiveEvent } = calendarSlice.actions;
