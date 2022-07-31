import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { currenUser } from "../middlewares/current-user";

const router = express.Router();

router.get("/api/users/currentuser", currenUser, (req: Request, res: Response) => {
  res.send({ curentUser: req.currentUser || null });
});

export { router as currentUserRouter };
