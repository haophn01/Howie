import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
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
            <Navbar/>
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




