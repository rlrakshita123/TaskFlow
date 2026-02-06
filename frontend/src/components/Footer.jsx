import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">TaskFlow</h2>
          <p className="footer-tagline">
            Organize your tasks. Boost your productivity.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/create">Create Task</Link></li>
          </ul>
        </div>

        <div className="footer-tech">
          <h4>Built With</h4>
          <p>React • Node.js • Express • MongoDB</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
