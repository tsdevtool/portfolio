import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Router is my information");
});

export default router;
