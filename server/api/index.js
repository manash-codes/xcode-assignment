import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../db/connection.js";

import bookRouter from "../routes/Book.routes.js";

dotenv.config(
    {
        path: "./.env"
    }
);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;
await connectDB();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use("/api/book", bookRouter)

app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
})