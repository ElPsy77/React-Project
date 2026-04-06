import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section>
      <h2>404: Page not found</h2>
      <p>The route you requested does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </section>
  )
}
