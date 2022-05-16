import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          {" "}
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
