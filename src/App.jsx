import { Navigate, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import { useAppContext } from './context/AppContext';
import routes from './routes';
import Header from './components/Header';

function App() {
  const { theme } = useAppContext();

  return (
    <div className={classNames('app-shell', `theme-${theme}`)}>
      <Header />
      <main className="container page-content">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
