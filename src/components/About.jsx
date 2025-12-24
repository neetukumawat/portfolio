
import { site } from '../data/site';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="card card--soft">
          <p className="text">
            Hello! I'm <strong>{site.name}</strong>, currently a {site.role} based in {site.location}. I focus on
            building small, delightful React apps and improving UI/UX. Comfortable with HTML, CSS, JavaScript, React.
          </p>
          <p className="text">
            Outside of coding, I love learning new design patterns, collaborating with peers, and polishing problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}
