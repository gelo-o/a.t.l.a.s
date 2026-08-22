import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login';
import Dashboard_End from './pages/Dashboard_(End-User)/Dashboard_End';
import Printing from './pages/Printing/Printing';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard_end" element={<Dashboard_End />} />
        <Route path="/printing" element={<Printing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
