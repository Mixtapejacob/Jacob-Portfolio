
import { Link } from "react-router-dom";
import {
  GitBranch,
  Users,
  ArrowUpRight,
} from "lucide-react";

const githubUrl =
  "https://github.com/Mixtapejacob/MixtapeJacob";

const linkedinUrl =
  "https://www.linkedin.com/in/jacob-atakora-6b93851a2/";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="logo">
          JA<span>.dev</span>
        </Link>

        <p>
          Building thoughtful digital experiences.
        </p>
      </div>

      <div className="footer-links">
        <Link to="/projects">
          Projects
        </Link>

        <Link to="/skills">
          Skills
        </Link>

        <Link to="/resume">
          Resume
        </Link>

        <Link to="/contact">
          Contact
        </Link>
      </div>

      <div className="footer-links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch size={18} />
          GitHub
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Users size={18} />
          LinkedIn
        </a>

        <Link to="/contact">
          Let's Connect
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Jacob Atakora.
        All rights reserved.
      </p>
    </footer>
  );
}

