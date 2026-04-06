import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section>
      <h2>Welcome</h2>
      <p>
        This project demonstrates routing, dynamic pages, API integrations, context-driven theme switching,
        and interactive UI elements in React.
      </p>
      <ul>
        <li><Link to="/users">Browse users</Link></li>
        <li><Link to="/books">Check latest IT books</Link></li>
        <li><Link to="/todo">Manage interactive todo list</Link></li>
      </ul>
    </section>
  )
}
