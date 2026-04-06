import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import routes from '../routes';
import { useAppContext } from '../context/AppContext';

function Header() {
  const { cartCount, theme, toggleTheme } = useAppContext();

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink className="logo" to="/">
          React Market
        </NavLink>

        <nav className="nav">
          {routes
            .filter((route) => route.nav)
            .map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  classNames('nav-link', {
                    active: isActive
                  })
                }
              >
                {route.label}
              </NavLink>
            ))}
        </nav>

        <div className="header-actions">
          <button className="btn btn-ghost" onClick={toggleTheme} type="button">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <span className="cart-pill">Items: {cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
