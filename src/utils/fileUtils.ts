import path from "path";
import { existsSync } from "fs";
import { mkdir } from "fs/promises";

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

function createThumbFolder() {
  const thumbDir = path.join(__dirname, "../../assets/thumb");

  if (!existsSync(thumbDir)) {
    mkdir(thumbDir, { recursive: true });
  }
}
