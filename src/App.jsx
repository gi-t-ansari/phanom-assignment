import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";
import { APP_URL } from "./config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
