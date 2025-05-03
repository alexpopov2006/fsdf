// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pros from "./pages/Pros";
import Cons from "./pages/Cons";
import Examples from "./pages/Examples";
import Conclusions from "./pages/Conclusions";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pros" element={<Pros />} />
              <Route path="/cons" element={<Cons />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="/conclusions" element={<Conclusions />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
