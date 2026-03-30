import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing'; 
import OS from './pages/OS/OS'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/os" element={<OS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;