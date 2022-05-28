import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Course from "pages/Course";
import Search from "pages/Search";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-8 md:mx-16">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* /courses/ path with optional search and page */}
            <Route path="/search" element={<Search />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
