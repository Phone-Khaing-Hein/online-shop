import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/homepage/Home";
import Notfound from "./pages/notFoundPage/Notfound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
