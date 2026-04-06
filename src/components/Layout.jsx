import { NavLink, Outlet } from 'react-router-dom'
import classNames from 'classnames'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/books', label: 'Books' },
  { to: '/todo', label: 'Todo' },
  { to: '/about', label: 'About' },
]

export default function Layout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', `theme-${theme}`)}>
      <header className="header">
        <h1>Digital Product Hub</h1>
        <button className="btn" onClick={toggleTheme}>Switch Theme</button>
      </header>

      <nav className="nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => classNames('nav-link', { active: isActive })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
