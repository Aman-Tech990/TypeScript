import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res
        .status(200)
        .json(
            {
                success: true,
                message: "Hello from Server!"
            }
        );
});

app.get("/hareKrishna", (req, res) => {
    res
        .status(200)
        .json(
            {
                success: true,
                message: "Hari Bol!"
            }
        );
});

export default app;