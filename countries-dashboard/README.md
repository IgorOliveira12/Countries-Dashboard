# 🌍 Countries Dashboard

A responsive React dashboard that lists countries from a public API, with search, filtering, sorting and persistent state.

This project was built to demonstrate clean React architecture, custom hooks, state management, and real-world UX patterns.

---

## ✨ Features

- Fetches data from the REST Countries API
- Search countries by name
- Filter by region
- Sort by name or population
- Persistent filters using `localStorage`
- Skeleton loader for better perceived performance
- Empty state when no results are found
- Responsive layout (mobile-first)
- Clean and reusable component structure

---

## 🧠 Architectural Decisions

### Custom Hook (`useCountries`)
All domain logic lives inside a custom hook:
- data fetching
- loading and error states
- filters state
- derived data (`useMemo`)
- persistence with `localStorage`

This keeps components simple and focused on rendering.

### Separation of Concerns
- **Hooks** → business logic
- **Components** → UI
- **Pages** → composition
- **CSS** → layout and responsiveness

### UX Considerations
- Skeleton loader avoids layout shifting
- Filters remain visible even when there are no results
- User preferences persist across page reloads

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS (Grid & Flexbox)
- REST API

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run the project
npm run dev

The app will be available at http://localhost:5173

📂 Project Structure
src/
├─ components/
│  ├─ CountryCard.jsx
│  ├─ Filters.jsx
│  ├─ Loader.jsx
│  └─ EmptyState.jsx
├─ hooks/
│  └─ useCountries.js
├─ pages/
│  └─ Home.jsx
├─ App.jsx
├─ main.jsx
└─ index.css

🔍 Possible Improvements

Dark mode using CSS variables

Pagination or infinite scroll

Accessibility improvements (ARIA)

Unit tests for the custom hook

📌 Author

Built by Igor Oliveira

This project is part of my portfolio and reflects my current approach to building clean, maintainable React applications.
