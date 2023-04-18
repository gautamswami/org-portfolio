import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Update from "./Update";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/update" element={<Update />} />
      <Route path="/" element={<App />}>
        <Route path="*" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
