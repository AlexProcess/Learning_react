import { NavBar } from "../components/NavBar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getMessagesES, localizer } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { useUiStore, useCalendarStore } from "../../hooks";
import { FabAddNew } from "../components/FabAddNew";
import { CalendarModal } from "../components/CalendarModal";
import { FabDelete } from "../components/FabDelete";

export const CalendarPage = () => {
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

    const [lastView, setLastView] = useState(
        localStorage.getItem("lastView") || "week"
    );

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: "#347CF7",
            borderRadius: "0px",
            opacity: 0.8,
            color: "white",
        };

        return {
            style,
        };
    };

    const onDoubleClick = (event) => {
        console.log({ onDoubleClick: event });
        openDateModal();
    };
    const event = [
        {
            title: "croissant con fokin cafe",
            notes: "hay que comprar el pastel",
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: "fafafa",
            user: {
                _id: "123",
                name: "alex",
            },
        },
    ];

    const onSelect = (event) => {
        setActiveEvent(event);
    };

    const onViewChanged = (event) => {
        localStorage.setItem("lastView", event);
        setLastView(event);
    };

    return (
        <>
            <NavBar />

            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                defaultView={lastView}
                endAccessor="end"
                style={{ height: "calc(100vh - 60px)" }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent,
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    );
};
