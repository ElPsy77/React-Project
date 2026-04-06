import { useEffect, useMemo, useState } from 'react'

export default function TodoPage() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    async function loadTodos() {
      const response = await fetch('https://dummyjson.com/todos?limit=10')
      const data = await response.json()
      setTodos(data.todos ?? [])
    }

    loadTodos()
  }, [])

  const visibleTodos = useMemo(() => {
    return showCompleted ? todos : todos.filter((todo) => !todo.completed)
  }, [todos, showCompleted])

  const addTodo = () => {
    if (!text.trim()) return
    setTodos((prev) => [
      { id: Date.now(), todo: text.trim(), completed: false },
      ...prev,
    ])
    setText('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  return (
    <section>
      <h2>Todo Planner</h2>
      <div className="actions">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="New task"
        />
        <button className="btn" onClick={addTodo}>Add</button>
        <button className="btn" onClick={() => setShowCompleted((prev) => !prev)}>
          {showCompleted ? 'Hide completed' : 'Show completed'}
        </button>
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
