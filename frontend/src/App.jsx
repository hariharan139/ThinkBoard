import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/Createpage";
import NoteDetailPage from "./pages/NoteDetailpage";
const App = () => {
  return (
    <div data-theme="retro">
      <button className="btn btn-primary">Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
