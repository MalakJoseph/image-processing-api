import path from "path";

export function generatePath(
  filename: string,
  width?: number,
  height?: number
): string {
  if (!width && !height) {
    return path.join(__dirname, "../../assets/full", `${filename}.jpg`);
  }

  return path.join(
    __dirname,
    "../../assets/thumb",
    `${filename}-${width}x${height}.jpg`
  );
}
