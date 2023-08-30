"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_js_1 = require("./db/entity/User.js");
const dataSource_js_1 = __importDefault(require("./db/dataSource.js"));
require("reflect-metadata");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User_js_1.user();
        newUser.userName = username;
        newUser.password = password; // Remember to hash this in a real-world scenario
        const userRepository = dataSource_js_1.default.getRepository(User_js_1.user);
        await userRepository.save(newUser);
        res.status(201).send("User registered successfully!");
    }
    catch (error) {
        res.status(500).send("Error registering user.");
    }
});
app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
    dataSource_js_1.default.initialize();
});
