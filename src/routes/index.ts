import { Router, Request, Response } from "express";
import { apiPage } from "../utils";
import images from "./api/images";

const routes = Router();

routes.use("/images", images);

routes.get("/", (_req: Request, res: Response): void => {
  res.send(apiPage);
});

export default routes;
