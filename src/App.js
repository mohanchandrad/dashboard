import Deshboard from "./pages/Deshboard";
import Login from "./user/Login";
import Ragister from "./user/Rajister";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/ragister" element={<Ragister /> } />
        <Route path="/deshboar" element={<Deshboard /> } />
      </Routes>
      
      
    </div>
  );
}

export default App;
