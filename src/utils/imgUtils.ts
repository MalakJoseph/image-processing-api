import sharp from "sharp";
import { existsSync } from "fs";
import { generatePath } from "./fileUtils";

export function resizeImage(
  filename: string,
  width: number,
  height: number
): Promise<Buffer> {
  return sharp(generatePath(filename))
    .resize({
      width,
      height,
    })
    .toBuffer();
}

export function isImgExist(path: string): boolean {
  return existsSync(path);
}
