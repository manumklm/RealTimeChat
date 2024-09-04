import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Make sure this import is present if using react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import Login from './pages/Login';
import Register from './pages/Register';
import GroupChat from './pages/chat/GroupChat';

function App() {
  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/GroupChat" element={<GroupChat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
