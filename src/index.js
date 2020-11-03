import React from "react";
import ReactDOM from "react-dom";
import * as PI from "./math.js";

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.double()}</li>
    <li>{PI.Trible()}</li>
  </ul>,
  document.getElementById("root")
);
