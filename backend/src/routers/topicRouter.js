import express from "express";
import { addTopic, getTopicList } from "../controllers/topicController";

const topicRouter = express.Router();

topicRouter.get("/list", getTopicList);
topicRouter.post("/add", addTopic);

export default topicRouter