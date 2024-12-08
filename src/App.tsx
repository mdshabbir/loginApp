import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpForm from './component/signUp/signupForm';
import LoginForm from './component/login/loginForm';
import './App.css'

const App: React.FC = () => (
  <Router>
    <nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </Router>
);

export default App;
