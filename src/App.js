import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddNewPerson from "./components/AddNewPerson/AddNewPerson";
import Retrieve from "./components/Retrieve/Retrieve";

export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


