
# 📝 Full Stack Todo App

This is a full-stack **Todo App** project consisting of a `frontend` built with React.js and a `backend` built with Node.js, Express, and MongoDB.

---

## 📁 Project Structure

```
root/
├── backend/    # Node.js + Express backend with MongoDB
└── frontend/   # React.js frontend (focus on core functionality)
```

---

## 🌐 Live Demo

- 🔗 Frontend: [https://basic-mini-todo-full-stack-app.netlify.app](https://basic-mini-todo-full-stack-app.netlify.app)
- 🔗 Backend: [https://basic-mini-todo-full-stack-app.onrender.com/api](https://basic-mini-todo-full-stack-app.onrender.com/)
- 🔐 Test Credentials: `email: pari1@gmail.com` & `password: 123`
- 📌 Todo Actions Page: [https://basic-mini-todo-full-stack-app.netlify.app/todos](https://basic-mini-todo-full-stack-app.netlify.app/todos)

---

## 🌐 Frontend

**Tech Stack**: React.js, JavaScript, Vite

**Features**:
- Signup & Login forms
- Store JWT token in localStorage
- Add, view, delete todos
- Toggle todo status (Complete/Incomplete)
- Consume protected API routes from backend
- Simple CSS (✅ functionality prioritized over UI/UX)

---

## 🖥️ Backend

**Tech Stack**: Node.js, Express.js, MongoDB, JWT

**Features**:
- REST API with CRUD endpoints for todos
- User authentication using JWT
- Token-based authorization for protected routes
- MongoDB for data persistence

---

## ⚙️ Environment Variables

### 📍 Backend (`backend/.env`)
```
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

### 📍 Frontend (`frontend/.env`)
```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone <repo-url>
cd your-project-folder
```

### 2. Setup and Run Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup and Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure MongoDB is running locally or use MongoDB Atlas.

---

## 🔧 Note

- The UI is intentionally simple and unstyled. Feel free to add Tailwind, Bootstrap, or your own CSS.
- The goal was to build a functional full-stack app first.

---

## 👨‍💻 Author

Developed by **Paritosh Barman**
