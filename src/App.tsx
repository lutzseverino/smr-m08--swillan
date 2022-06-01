import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CoursePreview from "pages/CoursePreview";
import Search from "pages/Search";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

import Home from "./pages/Home";
import ChapterView from "pages/ChapterView";

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
            <Route path="/preview" element={<CoursePreview />} />
            <Route path="/course" element={<ChapterView />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
