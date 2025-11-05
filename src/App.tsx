import "./index.css";
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
