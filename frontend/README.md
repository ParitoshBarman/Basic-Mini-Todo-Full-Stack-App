# Todo App (Frontend)

This is the **Frontend** of the Todo App built with **React.js** using **Vite**. It interacts with a backend server to manage user authentication and todo operations.

## 🚀 Features

- ✅ User Login & Signup
- ✅ Add, Delete Todos
- ✅ Mark Todo as Completed/Incomplete (Toggle Feature)
- ✅ Responsive UI (CSS based)
- ✅ JWT Token-based API requests
- ✅ RESTful API consumption

## 🗂️ Project Structure

```
src/
├── assets/             # Static assets (optional)
├── components/         # Navbar and Footer components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/              # Page-level components
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── TodoPage.jsx
├── styles/             # CSS stylesheets
│   ├── authForms.css
│   └── TodoPage.css
├── App.jsx             # Main component
├── index.css           # Global styles
├── main.jsx            # Entry point
```

## 📦 Installation

```bash
# Clone the repository
git clone <repo-link>
cd frontend

# Install dependencies
npm install
```

## 🛠️ Configuration

Create a `.env` file in the root with:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

## 🧪 Running Locally

```bash
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

## 📡 API Endpoints (Expected)

- `POST /auth/signup`
- `POST /auth/login`
- `GET /todos`
- `POST /todos`
- `PATCH /todos/:id`
- `DELETE /todos/:id`



---



## Features

- User login and signup
- Create, view, and delete todos
- Toggle todos as complete/incomplete
- Token-based authentication using localStorage
- Fully functional features

> **Note:** UI/UX styling is minimal and functional only — the focus of this project is on working features, not appearance.

---

**Built with ❤️ by Paritosh Barman**
