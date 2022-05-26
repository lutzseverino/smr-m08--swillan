import CourseSearch from "pages/CourseSearch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* /courses/ path with optional search and page */}
          <Route path="/search" element={<CourseSearch />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
