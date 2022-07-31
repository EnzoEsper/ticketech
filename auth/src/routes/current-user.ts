import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { currenUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get("/api/users/currentuser", currenUser, requireAuth, (req: Request, res: Response) => {
  res.send({ curentUser: req.currentUser || null });
});

export { router as currentUserRouter };
