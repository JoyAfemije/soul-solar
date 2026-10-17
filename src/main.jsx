import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);

// Safety net: if the app ever fails to render, show all content without animation.
setTimeout(() => {
  const root = document.getElementById("root");
  if (!root || root.childElementCount === 0) document.documentElement.classList.add("no-anim");
}, 2500);
