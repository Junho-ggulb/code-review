import express from "express";
import morgan from "morgan";
import path from "path";
import topicRouter from "./routers/topicRouter";
import cors from "cors";

const app = express();
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/topic", topicRouter);

app.get("/", (req, res) => res.sendFile(__dirname, 'public/index.html'))
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '../../frontend/build/index.html')));

export default app;





