import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login';
import Dashboard_End from './pages/Dashboard_(End-User)/Dashboard_End';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard_end" element={<Dashboard_End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
