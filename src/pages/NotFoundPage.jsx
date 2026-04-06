import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>The page you requested does not exist.</p>
      <Link className="btn" to="/">
        Go home
      </Link>
    </section>
  );
}

export default NotFoundPage;
