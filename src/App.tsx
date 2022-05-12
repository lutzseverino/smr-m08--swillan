import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <Routes> { /* The Switch decides which component to show based on the current URL.*/ }
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


