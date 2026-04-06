import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';

const routes = [
  { path: '/', element: <HomePage />, label: 'Home', nav: true },
  { path: '/products', element: <ProductsPage />, label: 'Products', nav: true },
  { path: '/users', element: <UsersPage />, label: 'Users', nav: true },
  { path: '/cart', element: <CartPage />, label: 'Cart', nav: true },
  { path: '/about', element: <AboutPage />, label: 'About', nav: true },
  { path: '/products/:productId', element: <ProductDetailsPage />, label: 'Product Details', nav: false },
  { path: '*', element: <NotFoundPage />, label: 'Not Found', nav: false }
];

export default routes;
