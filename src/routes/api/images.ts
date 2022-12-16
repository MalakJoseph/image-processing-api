import { Router, Request, Response } from "express";
import { writeFile } from "fs/promises";
import { generatePath, isImgExist, resizeImage } from "../../utils";

const images = Router();

images.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const path = generatePath(filename, height, width);

    if (!isImgExist(path)) {
      const resizedImage = await resizeImage(filename, width, height);
      await writeFile(path, resizedImage);
    }

    res.sendFile(path);
  } catch (error) {
    res.status(500).send("Image processing failed, please try again later.");
  }
});

export default images;
