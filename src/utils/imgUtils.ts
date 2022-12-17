import sharp from "sharp";
import { existsSync } from "fs";
import { generatePath } from "./fileUtils";

/**
 * Creates a data to be resolved after being resized using `sharp`
 * @param filename Image name
 * @param width Numeric image width
 * @param height Numeric image height
 * @returns A promise to resolve buffered data
 */

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

/**
 * Check whether path exists.
 * @param path Image name
 * @returns Boolean
 */

export function isImgExist(path: string): boolean {
  return existsSync(path);
}
