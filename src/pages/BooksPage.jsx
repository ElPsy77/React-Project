import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

export default function BooksPage() {
  const [books, setBooks] = useState([])
  const [showTopFive, setShowTopFive] = useState(true)
  const [sortDirection, setSortDirection] = useState('asc')

  useEffect(() => {
    async function loadBooks() {
      const { data } = await axios.get('https://api.itbook.store/1.0/new')
      setBooks(data.books ?? [])
    }

    loadBooks()
  }, [])

  const preparedBooks = useMemo(() => {
    const copy = [...books]
    copy.sort((a, b) => {
      const left = Number(a.price.replace('$', '')) || 0
      const right = Number(b.price.replace('$', '')) || 0
      return sortDirection === 'asc' ? left - right : right - left
    })

    return showTopFive ? copy.slice(0, 5) : copy
  }, [books, showTopFive, sortDirection])

  return (
    <section>
      <h2>IT Book Store</h2>
      <div className="actions">
        <button className="btn" onClick={() => setShowTopFive((prev) => !prev)}>
          {showTopFive ? 'Show all books' : 'Show top 5 only'}
        </button>
        <button className="btn" onClick={() => setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))}>
          Sort by price: {sortDirection}
        </button>
      </div>
      <ul>
        {preparedBooks.map((book) => (
          <li key={book.isbn13}>
            {book.title} — {book.price}
          </li>
        ))}
      </ul>
    </section>
  )
}
