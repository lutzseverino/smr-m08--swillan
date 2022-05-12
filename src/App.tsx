import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';

import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> { /* The Switch decides which component to show based on the current URL.*/ }
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


