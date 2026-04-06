import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import BooksPage from './pages/BooksPage'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
