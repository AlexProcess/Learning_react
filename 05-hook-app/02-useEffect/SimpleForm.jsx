import { useEffect, useState } from "react";
import { Message } from "./message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "alex2",
        email: "",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log("useEffect called!");
    }, []);

    useEffect(() => {
        // console.log("formState changed!");
    }, [formState]);

    useEffect(() => {
        // console.log("Email changed!");
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-3"
                placeholder="alex@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {username === "alex2" && <Message />}
        </>
    );
};
