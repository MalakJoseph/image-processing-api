import { Router, Request, Response } from "express";
import { writeFile } from "fs/promises";
import {
  generateHTML,
  generatePath,
  isImgExist,
  resizeImage,
  validateInputs,
} from "../../utils";

const images = Router();

images.get("/", async (req: Request, res: Response) => {
  try {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const error = validateInputs(filename, width, height);
    const path = generatePath(filename, width, height);

    if (error) throw new Error(`400/${error}`);

    if (!isImgExist(path)) {
      const resizedImage = await resizeImage(filename, width, height);
      await writeFile(path, resizedImage);
    }

    res.sendFile(path);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message.startsWith(400)) {
      res.status(400).send(error.message.replace("400/", ""));
      return;
    }

    res.status(500).send(
      generateHTML({
        title: "Image processing failed, please try again later.",
      })
    );
  }
});

export default images;
