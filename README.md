# LinkedIn Clone

A LinkedIn clone built with React and Vite, following this [tutorial](https://www.youtube.com/watch?v=HimR8Xtz17U&t=1504s).

## Tech Stack

- **React** + **Vite**
- **Firebase** (Authentication)
- **React Router v8**
- **Sass**

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`. The root path redirects to `/login`.

## Project Structure

```
src/
├── Pages/          # Page-level components
├── components/     # Reusable UI components
├── api/            # API layer (Firebase auth)
├── Routes/         # Route configuration
└── Sass/           # Component styles
```

## Progress So Far

### Project & Dependencies

- React app scaffolded with Vite
- Installed Firebase, React Router v8, Sass, and routing helpers (`localforage`, `match-sorter`, `sort-by`)

### Firebase Setup

- `firebaseConfig.js` initializes the Firebase app (`linkedinproject-f53fa`)
- Exports `app` and `auth` for use across the app
- Analytics loads only when supported (avoids dev crashes)

### Routing

- React Router v8 with `createBrowserRouter`
- `/login` renders the Login page
- `/` redirects to `/login`
- `RouterProvider` wired in `main.jsx`

### Login UI

- `LoginComponent` with email and password inputs
- `credentials` state object updated via spread (`{ ...credentials, email }`)
- Styled inputs (dark background, white text/placeholders) and login button
- **Register** and **Log IN to LinkedIn** buttons

### Authentication API

- `RegisterAPI` — `createUserWithEmailAndPassword` (signup)
- `LoginAPI` — `signInWithEmailAndPassword` (login)
- Both are async and return Firebase promises
- Handlers use `try/catch` and log results to the console

## Not Yet Built

- Feed / home page after login
- User profile, posts, navigation bar
- Redirect on successful auth
- `App.jsx` is currently unused (routing lives in `main.jsx`)

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run lint`  | Run ESLint               |
| `npm run preview` | Preview production build |
