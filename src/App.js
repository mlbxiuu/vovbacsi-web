import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// import './App.css';
import "./style/header.css";
import "./style/allstyle.css";

import "bootstrap/dist/css/bootstrap.min.css";
import TrangChu from "./components/TrangChu";
import Register from "./components/Register";
import Login from "./components/Login";
import CapCuu from "./components/CapCuu";
import ChiTietCapCuu from "./components/ChiTietCapCuu";

// import TrangChu from './components/TrangChu';

function App() {
  
 


  return (
    <>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sos" element={<CapCuu />} />
        <Route path="/sos/sos-detail" element={<ChiTietCapCuu/>}/>
      </Routes>
    </>
  );
}

export default App;
