import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Landing } from "./pages/LandingPage";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/nossas-solucoes" element={<Services />} />
        <Route path="/sorrisos-do-amanha" element={<Landing />} />
        <Route path="/login" element={<Login />} />
  
      </Routes>

    </div>
  )
}

export default App;
