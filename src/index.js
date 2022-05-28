import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/vars.css";
import "./styles/index.css";
import App from "./App";

// Set up mock server if in development mode
async function renderApp() {
    if (process.env.NODE_ENV === "development") {
        try {
            const { worker } = require("./mocks/browser");
            await worker.start();
        } catch (error) {
            console.error(error);
        }
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

renderApp();
