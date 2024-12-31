import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import { Avatar, Typography } from '@mui/material';



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
                <Route path="/Home" element={<Home />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </Router>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Avatar src="logo.svg" style={{
                margin: '20px',
                width: '500px',
                height: '500px',
            }}/>
            <Typography variant = "body1">Shall you be my guest today?</Typography>
        </div>

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


