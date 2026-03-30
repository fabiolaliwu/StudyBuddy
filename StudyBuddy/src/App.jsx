import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing'; 
import OS from './pages/OS'; 

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/os">OS</Link>
      </nav>

      {/* Page Switcher */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/os" element={<OS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;