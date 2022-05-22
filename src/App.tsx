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
          <Route path="/courses/" element={<CourseSearch />}>
            <Route
              path="search/:search/page/:page"
              element={<CourseSearch />}
            />
            <Route path="search/:search" element={<CourseSearch />} />
            <Route path="page/:page" element={<CourseSearch />} />
            <Route path="" element={<CourseSearch />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
