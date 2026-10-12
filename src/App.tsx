
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // Module is how you breakdown your code in bitesize piece. Example of reuseable code
import Home from "./pages/home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

