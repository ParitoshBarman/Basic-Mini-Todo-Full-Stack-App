# Todo App Backend

This is the **backend** of a simple Todo App built using **Node.js**, **Express**, and **MongoDB** with **JWT-based Authentication**.

## 🚀 Features

- User Signup & Login with encrypted passwords (bcrypt)
- JWT Authentication
- CRUD operations for Todos
- Protected Todo Routes
- MongoDB for persistent storage
- Modular folder structure

## 🗂 Folder Structure

```
backend/
│
├── config/             # Database connection
│   └── db.js
│
├── controllers/        # Logic for auth and todos
│   ├── authController.js
│   └── todoController.js
│
├── middleware/         # JWT verification middleware
│   └── authMiddleware.js
│
├── models/             # Mongoose schemas
│   ├── User.js
│   └── Todo.js
│
├── routes/             # API routes
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── .env                # Environment variables
├── .gitignore
├── index.js            # Entry point
├── package.json
└── README.md
```

## 🔐 Environment Variables

Create a `.env` file in the root and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
PORT=3000
```

## 🛠 Installation

1. Clone the repo
2. Install dependencies
```bash
npm install
```
3. Run the server
```bash
node index.js
```

## 🧪 API Endpoints

### Auth
- `POST /api/auth/signup` – Signup with email and password
- `POST /api/auth/login` – Login and receive JWT

### Todos (Require JWT in `Authorization: Bearer <token>`)
- `GET /api/todos` – Fetch todos
- `POST /api/todos` – Add a todo `{ title: "My Todo" }`
- `PATCH /api/todos/:id` – Update a todo
- `DELETE /api/todos/:id` – Delete a todo

---

## 🔐 Authentication Routes

### POST `/api/auth/signup`
Create a new user account.

**Request Body:**
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Signup successful"
}
```

---

### POST `/api/auth/login`
Login with existing user credentials.

**Request Body:**
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "your_jwt_token"
}
```

---

## ✅ Todo Routes (Protected)

🔐 All routes below require an `Authorization` header:
```
Authorization: Bearer <your_token>
```

---

### GET `/api/todos`
Get all todos for the authenticated user.

**Response:**
```json
[
  {
    "_id": "id",
    "title": "Buy groceries",
    "completed": false,
    "userId": "user_id"
  }
]
```

---

### POST `/api/todos`
Create a new todo item.

**Request Body:**
```json
{
  "title": "Finish homework"
}
```

**Response:**
```json
{
  "_id": "id",
  "title": "Finish homework",
  "completed": false,
  "userId": "user_id"
}
```

---

### PATCH `/api/todos/:id`
Update a todo item.

**Request Body:**
```json
{
  "title": "Update title",
  "completed": true
}
```

**Response:**
```json
{
  "_id": "id",
  "title": "Update title",
  "completed": true,
  "userId": "user_id"
}
```

---

### DELETE `/api/todos/:id`
Delete a todo item.

**Response:**
```json
{
  "message": "Deleted"
}
```

---

## 🧠 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- Bcrypt for password hashing
- CORS for cross-origin requests


## 🧑‍💻 Author

Made with ❤️ by Paritosh Barman
