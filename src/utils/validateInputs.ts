import { generatePath } from "./fileUtils";
import { isImgExist } from "./imgUtils";

export const validateInputs = (
  filename: string,
  width: number,
  height: number
): string | undefined => {
  if (!filename) return "Filename is missing!";

  if (!isImgExist(generatePath(filename))) return "No such image!";

  if (!width && !height) return;

  if (isNaN(width) || isNaN(height))
    return "Width and height must be provided and of numerical values.";

  if (width <= 0 || height <= 0)
    return "Width and height must be positive integers.";

  return;
};
