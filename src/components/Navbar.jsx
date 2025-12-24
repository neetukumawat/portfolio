import { site } from "../data/site";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Brand / Logo */}
        <a href="#home" className="nav__brand">
          {site.name.split(" ")[0]}{" "}
          <span className="brand-accent">Portfolio</span>
        </a>

        {/* Navigation Links */}
        <nav className="nav__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <FaGithub />
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <FaLinkedin />
          </a>
        </nav>
      </div>
    </header>
  );
}
