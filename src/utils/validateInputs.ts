import { generatePath } from "./fileUtils";
import { generateHTML } from "./generateHTML";
import { isImgExist } from "./imgUtils";

/**
 * Validate query params in different scenarios
 * @param filename Image name
 * @param width Numeric image width
 * @param height Numeric image height
 * @returns A string in case of error or undefined otherwise.
 */

export const validateInputs = (
  filename: string,
  width: number,
  height: number
): string | undefined => {
  if (!filename)
    return generateHTML({
      title: "Filename is missing!",
      helper:
        "Do you mean <a href='http://localhost:3000/api/images?filename=santamonica'>localhost:3000/api/images?filename=santamonica</a>?",
    });

  if (!isImgExist(generatePath(filename)))
    return generateHTML({
      title: "No such image!",
      desc: "Please refer back to read the instructions.",
      helper: "<a href='http://localhost:3000/api/'>Go back</a>",
    });

  if (!width && !height) return;

  if (isNaN(width) || isNaN(height))
    return generateHTML({
      title: "Bad input!",
      desc: "Width and height must be provided and of numerical values.",
      helper:
        "Do you mean <a href='http://localhost:3000/api/images?filename=santamonica&width=500&height=400'>localhost:3000/api/images?filename=santamonica&width=500&height=400</a>?",
    });

  if (width <= 0 || height <= 0)
    return generateHTML({
      title: "Bad input!",
      desc: "Width and height must be positive integers.",
      helper:
        "Do you mean <a href='http://localhost:3000/api/images?filename=santamonica&width=500&height=400'>localhost:3000/api/images?filename=santamonica&width=500&height=400</a>?",
    });

  return;
};
