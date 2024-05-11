import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/HomeComp/Home";
import { About } from "./Components/About/About";
import {Products} from "./Components/Products/Products";
import {Contact} from "./Components/Contact/Contact";
import {People} from "./Components/About/People";
import { Footer } from "./Components/Footer/Footer";
import { QStandards } from "./Components/About/QStandards";
import ScrollToTop from "./Components/ScrollToTop";
// import "./"
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/people" element={<People/>} />
          <Route exact path="/qstandards" element={<QStandards/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
