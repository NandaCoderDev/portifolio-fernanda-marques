import "./index.css";
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="fixed inset-0 -z-10 bg-[url('https://mycom.com/wp-content/uploads/2025/07/featured-image.png')] bg-cover bg-center"></div>
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
