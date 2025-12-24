
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
