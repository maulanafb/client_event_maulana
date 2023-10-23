
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageSignIn from './pages/signin';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<PageSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
