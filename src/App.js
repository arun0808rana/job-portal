import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CommonBar from "./components/commonBar/CommonBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Sidebar className="sidebar" />
        <div className="right-layout">
          <CommonBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
