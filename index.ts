import  express  from "express";
import { user } from "./db/entity/User.js";
import dataSource from "./db/dataSource.js";
import  'reflect-metadata';



const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new user();
        newUser.userName = username;
        newUser.password = password; // Remember to hash this in a real-world scenario

        const userRepository = dataSource.getRepository(user);
        await userRepository.save(newUser);

        res.status(201).send("User registered successfully!");
    } catch (error) {
        res.status(500).send("Error registering user.");
    }
});


   app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
    dataSource.initialize();
  });
