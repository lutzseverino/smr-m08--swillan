import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
