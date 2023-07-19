import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

const myElement = <App />;

const root = createRoot(document.getElementById("root"));
root.render(myElement);
