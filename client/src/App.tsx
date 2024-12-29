import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App: React.FC = () => {
    return (
      <Router>
          <nav style={styles.nav}>
              <Link to="/Home" style={styles.link}>Home</Link>
              <Link to="/About" style={styles.link}>About</Link>
          </nav>
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
          </Routes>
      </Router>
  );
};

const styles = {
  nav: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
      backgroundColor: '#007BFF',
  },
  link: {
      margin: '0 15px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
  },
};

export default App;

