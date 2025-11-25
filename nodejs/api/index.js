import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.status(200).json({ success: true, message: "Hello from Vercel backend!" });
});

// Export the handler for Vercel
export default app;
