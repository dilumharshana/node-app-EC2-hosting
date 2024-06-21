import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => res.json({ status: 200, message:'Welcome to node app dockerizing.' }));

export default router
