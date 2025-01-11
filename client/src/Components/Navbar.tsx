import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const hiddenRoutes = ['/AboutMe', '/Technical', '/Project']

    if (hiddenRoutes.includes(location.pathname)) {
        return null;
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <Link to="/Technical" style={styles.link}>Technical</Link>
            <Link to="/AboutMe" style={styles.link}>About Me</Link>
            <Link to="/Project" style={styles.link}>Project</Link>
        </div>
    )
}

const styles = {
    link: {
        margin: '0 15px',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
};