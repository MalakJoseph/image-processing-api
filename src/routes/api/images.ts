import { Router, Request, Response } from "express";

const images = Router();

images.get("/", async (req: Request, res: Response): Promise<void> => {
  res.send("Next...");
});

export default images;
