
export default function ProjectCard({ project }) {
    return (
      <article className="card">
        <img src={project.image} alt={project.title} className="card__image" />
        <div className="card__body">
          <h3 className="card__title">{project.title}</h3>
          <p className="card__desc">{project.description}</p>
          <div className="card__tags">
            {project.tags?.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="card__actions">
            <a className="btn btn--primary" href={project.sourceCode} target="_blank" rel="noreferrer">
              Source Code
            </a>
            {project.liveDemo && (
              <a className="btn btn--secondary" href={project.liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }
  