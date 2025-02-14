import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nopagefound from "./components/Nopagefound.jsx";
import Profile from "./pages/Profile.jsx";
import WildfireDashboard from "./components/Dashboard.jsx";
import WildfirePreventionContactForm from "./pages/Contactpage.jsx";
const App = () => {
  return (
    
    
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopagefound/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<WildfirePreventionContactForm/>} />
        <Route path="/dashboard" element={<WildfireDashboard/>} />
      </Routes>
      <Footer/>
    
   
    </>
  );
};

export default App;
