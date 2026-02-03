// ---------------------------
// server.js
// ---------------------------

// 1️⃣ Import packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// 2️⃣ Middleware to parse JSON bodies
app.use(express.json());

// ---------------------------
// 3️⃣ Connect to MongoDB
// ---------------------------
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("MongoDB connection error:", err));

// ---------------------------
// 4️⃣ Import User model
// ---------------------------
const User = require("./models/User"); // Make sure models/User.js exists

// ---------------------------
// 5️⃣ Routes
// ---------------------------

// GET: Return all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Add a new user
app.post("/users", async (req, res) => {
    const newUser = new User(req.body); // expects JSON {name, email, age,...}
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: Edit a user by ID
app.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return the updated document
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Remove a user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.json(deletedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ---------------------------
// 6️⃣ Start the server
// ---------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// ---------------------------
// models/User.js
// ---------------------------
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    favoriteFoods: [String],
});

module.exports = mongoose.model("User", userSchema);
