// === BACKEND (Node.js + Express + MongoDB) ===
// Using MVC pattern

// ====== index.js ======
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));


// ====== models/User.js ======
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);


// ====== models/Todo.js ======
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todo", todoSchema);


// ====== routes/authRoutes.js ======
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;


// ====== routes/todoRoutes.js ======
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.use(auth);
router.get("/", getTodos);
router.post("/", addTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;


// ====== controllers/authController.js ======
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne();
    if (userExists) {
      return res.status(400).json({ message: "Only one account allowed." });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { signup, login };


// ====== controllers/todoController.js ======
const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.userId });
  res.json(todos);
};

const addTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({ title, userId: req.userId });
  await newTodo.save();
  res.status(201).json(newTodo);
};

const updateTodo = async (req, res) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: "Todo not found" });
  res.json(updated);
};

const deleteTodo = async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Deleted" });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };


// ====== middleware/authMiddleware.js ======
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};


// ====== .env ======
// MONGO_URI=<your_mongodb_connection_string>
// JWT_SECRET=supersecretkey