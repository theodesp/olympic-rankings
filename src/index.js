import "babel-polyfill";
import React from "react"
import { render } from "react-dom"
import App from "./containers/app"
import "./styles/app.scss"
import API from "./services/api";

const datUrl = "michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json";

render(<App api={API} dataUrl={datUrl} />, document.getElementById("main"));
