# React Digital Product

Полноценный индивидуальный проект на React с динамической маршрутизацией, API-запросами и интерактивным интерфейсом.

## Что реализовано

- Навигация: 6 страниц + `NotFound`
- API-запросы (DummyJSON):
  - `GET /products?limit=20`
  - `GET /products/:id`
  - `GET /users?limit=12`
  - `GET /quotes/random`
- Динамическая страница: `/products/:productId` через `useParams`
- Интерактивные элементы:
  - Переключение темы (light/dark)
  - Поиск и сортировка товаров
  - Добавление в корзину
  - Изменение количества товаров в корзине
- Управление состоянием: `React Context`
- Доп. библиотека: `classnames`

## Установка и запуск

```bash
npm install
npm run dev
```
