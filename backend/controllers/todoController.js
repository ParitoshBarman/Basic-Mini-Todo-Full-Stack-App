const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
};

const addTodo = async (req, res) => {
    const { title } = req.body;
    const newTodo = new Todo({ title, userId: req.user.id });
    await newTodo.save();
    res.status(201).json(newTodo);
};

const updateTodo = async (req, res) => {
    const updated = await Todo.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    res.json(updated);
};

const deleteTodo = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id, userId: req.user.id });
    res.json({ message: "Deleted" });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };