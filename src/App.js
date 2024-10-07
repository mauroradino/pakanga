import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from "./provider";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import Home from "./Views/HomePage/Home"
import Details from "./Views/DetailsPage/Details";
import CarritoPage from "./Views/CarritoPage/CarritoPage";
import './App.css';
import DetalleGift from "./Views/DetalleGift/DetalleGift";
import AdminPage from "./Views/Admin/AdminPage";
import Dashboard from "./Views/Dashboard/Dashboard";

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/detalle-gift" element={<DetalleGift />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
