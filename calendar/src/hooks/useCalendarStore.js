import { useDispatch, useSelector } from "react-redux";
import {
    onAddNewEvent,
    onDeleteEvent,
    onSetActiveEvent,
    onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
    const { events, activeEvent } = useSelector((state) => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        // TODO: llegar al backend

        if (calendarEvent._id) {
            dispatch(onUpdateEvent({ ...calendarEvent }));
            //actualizando
        } else {
            //Creando
            dispatch(
                onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() })
            );
        }
    };

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    };

    return {
        //propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    };
};
