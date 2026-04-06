import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=20')
        const data = await response.json()
        setUsers(data.users ?? [])
      } catch (err) {
        setError('Failed to load users')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
    )
  }, [users, search])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h2>Users</h2>
      <input
        type="text"
        value={search}
        placeholder="Search by name"
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
