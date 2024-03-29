import React from "react";
import reactDOM from "react-dom/client";
import "./styles.css";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import { CounterApp } from "./CounterApp";

reactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={100} />
    </React.StrictMode>
);
