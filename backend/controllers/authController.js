const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
require('dotenv').config();

const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Only one account allowed." });
        }
        const newUser = new User({ email, password: bcrypt.hashSync(password, 10) });
        await newUser.save();
        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let compare = bcrypt.compareSync(password, user.password)
        if (!compare) {
            return res.status(401).json({ message: "Invalid credential" });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET_KEY);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { signup, login };