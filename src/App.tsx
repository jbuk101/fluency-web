import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conversation from './pages/Conversation';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversation/:scenario" element={<Conversation />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
export default App;