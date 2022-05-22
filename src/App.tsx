import CourseSearch from "pages/coursesearch";
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
