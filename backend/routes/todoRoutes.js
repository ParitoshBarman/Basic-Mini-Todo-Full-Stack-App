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