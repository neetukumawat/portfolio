
import { site } from '../data/site';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const mailto = `mailto:${site.email}`;
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <div className="card card--soft">
          <p className="text">
            Want to collaborate or say hi? I'm quick on email and LinkedIn.
          </p>
          <div className="actions">
            <a href={mailto} className="btn btn--primary"><FaEnvelope />&nbsp;Email Me</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn--secondary">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
``
