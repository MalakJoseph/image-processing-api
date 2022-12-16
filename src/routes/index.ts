import { Router, Request, Response } from "express";
import images from "./api/images";

const routes = Router();

routes.use("/images", images);

routes.get("/", (_req: Request, res: Response): void => {
  res.send("Welcome to image processing api");
});
export default routes;
