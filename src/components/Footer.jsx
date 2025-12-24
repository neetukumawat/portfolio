
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Built with React.</p>
      </div>
    </footer>
  );
}
``
