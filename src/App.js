import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Bolinhos from "./components/bolinhos";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-amber-100 min-h-screen">
        <Header />
        <Buttons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bolinhos" element={<Bolinhos />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
