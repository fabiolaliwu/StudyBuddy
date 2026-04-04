import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing'; 
import OS from './pages/OS/OS'; 
import Arc from './pages/160/160';
import SND from './pages/135/135';
import DB from './pages/DatabaseDesign/DatabaseDesign';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/os" element={<OS />} />
        <Route path="/160" element={<Arc />} />
        <Route path="/135" element={<SND />} />
        <Route path="/db" element={<DB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;