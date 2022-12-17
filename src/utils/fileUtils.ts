import path from "path";
import { existsSync } from "fs";
import { mkdir } from "fs/promises";

/**
 * Generate an image path in `assets/thumb` if width & height values exist. Otherwise, fallback to the original image path in `assets/full`.
 * @param filename Image name
 * @param width Numeric image width
 * @param height Numeric image height
 * @returns string
 */

export function generatePath(
  filename: string,
  width?: number,
  height?: number
): string {
  createThumbFolder();

  if (!width && !height) {
    return path.join(__dirname, "../../assets/full", `${filename}.jpg`);
  }

  return path.join(
    __dirname,
    "../../assets/thumb",
    `${filename}-${width}x${height}.jpg`
  );
}

/**
 * A guard to create thumb folder when it's not exist.
 */

function createThumbFolder() {
  const thumbDir = path.join(__dirname, "../../assets/thumb");

  if (!existsSync(thumbDir)) {
    mkdir(thumbDir, { recursive: true });
  }
}
