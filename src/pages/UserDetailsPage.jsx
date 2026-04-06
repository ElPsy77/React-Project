import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetailsPage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        if (!response.ok) throw new Error('User not found')
        const data = await response.json()
        setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [id])

  if (loading) return <p>Loading profile...</p>
  if (error) return <p>{error}</p>

  return (
    <article>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address?.city}, {user.address?.country}</p>
    </article>
  )
}
