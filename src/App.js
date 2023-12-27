import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/HomeComp/Home";
import { About } from "./Components/About/About";
import {Products} from "./Components/Products/Products";
import {Contact} from "./Components/Contact/Contact";
import {KeyPers} from "./Components/KeyPers/KeyPers";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/keypersonnel" element={<KeyPers/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
