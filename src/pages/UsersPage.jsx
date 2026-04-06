import { useEffect, useMemo, useState } from 'react';
import { getUsers } from '../services/api';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await getUsers(12);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Users request failed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const visibleUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(normalizedSearch) || user.email.toLowerCase().includes(normalizedSearch);
    });
  }, [users, search]);

  return (
    <section>
      <h1>Users</h1>
      <input
        className="input"
        placeholder="Search user by name or email"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p className="muted">Loading users...</p>}

      {!loading && (
        <div className="users-list">
          {visibleUsers.map((user) => (
            <article key={user.id} className="user-item">
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <div>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p className="muted">{user.email}</p>
                <p>{user.company?.title || 'No position listed'}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default UsersPage;
