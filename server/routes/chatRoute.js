import express from 'express'
import { createChat, findChat, findUserChats } from '../controllers/chatController.js'

const router = express.Router();

router.post("/", createChat);
router.get("/:userID", findUserChats);
router.get("/find/:firstID/:secondID", findChat)


export default router;

