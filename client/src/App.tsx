import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Landing from './pages/Landing';

export default function App() {
    return (
        <div style ={{
            backgroundColor: '#F7F4DF',
            height: '100vh',
        }}>
        <Router>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <Link to="/Home" style={styles.link}>Home</Link>
                <Link to="/AboutMe" style={styles.link}>About Me</Link>
                <Link to="/Project" style={styles.link}>Project</Link>
            </div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </Router>
        </div>
    );
};

const styles = {
    link: {
        margin: '0 15px',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
};


