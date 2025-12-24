import { site } from "../data/site";
import profileImg from "../assets/profile.jpg";
import cv from "../assets/Neetu-Kumawat-CV.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__summary">{site.hero.summary}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>

            <a href={cv} download className="btn btn--secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero__photoWrap">
          <div className="hero__photoRing">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="hero__glow" />
        </div>
      </div>
    </section>
  );
}
