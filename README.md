# Individual React Project — Digital Product Hub

## Реализованные критерии

- **Навигация (5+ страниц):** Home, Users, UserDetails (dynamic), Books, Todo, About, NotFound.
- **Запросы к серверу (3+):**
  - `GET https://dummyjson.com/users?limit=20`
  - `GET https://dummyjson.com/users/:id`
  - `GET https://api.itbook.store/1.0/new`
  - `GET https://dummyjson.com/todos?limit=10`
- **Динамические страницы:** `/users/:id` с `useParams`.
- **Интерактивность (3+):**
  - Переключение темы (Context)
  - Поиск пользователей
  - Кнопки сортировки/ограничения книг
  - Добавление todo и переключение выполненности/фильтр
- **State management:** React Context (`ThemeContext`).
- **Доп. библиотека:** `classnames`.

## Запуск

```bash
npm install
npm run dev
```

## Рекомендации по сдаче

- Загрузите репозиторий на GitHub.
- Добавьте деплой на Vercel для бонуса.
