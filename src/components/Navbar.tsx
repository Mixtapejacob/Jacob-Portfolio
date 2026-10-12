
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    //Typescript due to use dealing with data types. In python this would be key-value pairs
  const links = [
    { name: "Home", path: "/" },
    { name: "My Story", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        JA<span>.dev</span>
      </NavLink>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/contact" className="contact-btn">
        Let's Talk
      </NavLink>
    </header>
  );
}

export default Navbar;


