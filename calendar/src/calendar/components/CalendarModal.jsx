import { addHours, differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ReactModal from "react-modal";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import es from "date-fns/locale/es";
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale("es", es);

ReactModal.setAppElement("#root");

export const CalendarModal = () => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
        },
    };

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { activeEvent, startSavingEvent } = useCalendarStore();

    const onCloseModal = () => {
        // console.log("se cierra la modal");
        closeDateModal();
    };

    const [formValues, setFormValues] = useState({
        title: "Alex",
        notes: "Tercero",
        start: new Date(),
        end: addHours(new Date(), 2),
    });

    const titleClass = useMemo(() => {
        if (!formSubmitted) return "";
        return formValues.title.length > 0 ? "" : "is-invalid";
    }, [formValues.title, formSubmitted]);

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }
    }, [activeEvent]);

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const difference = differenceInSeconds(
            formValues.end,
            formValues.start
        );

        if (isNaN(difference) || difference <= 0) {
            Swal.fire("Fechas incorrectas", "Revise la fecha ingresada");
            return;
        }
        if (formValues.title.length <= 0) return;

        await startSavingEvent(formValues);
        closeDateModal();
    };

    //TODO:

    return (
        <ReactModal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            // className="modal"
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        onChange={(event) => onDateChanged(event, "start")}
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                    />
                    <input
                        className="form-control"
                        placeholder="Fecha inicio"
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <input
                        className="form-control"
                        placeholder="Fecha inicio"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Una descripción corta
                    </small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">
                        Información adicional
                    </small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </ReactModal>
    );
};
