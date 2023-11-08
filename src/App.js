import React from "react";
import Login from "./user/Login";
import Ragister from "./user/Rajister";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ragister" element={<Ragister />} />
      </Routes>
    </div>
  );
}

export default App;
