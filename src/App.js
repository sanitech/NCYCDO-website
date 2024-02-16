import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Donate from "./Pages/Donate/Donate";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
