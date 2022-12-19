import { existsSync } from "fs";
import { access, constants, unlink } from "fs/promises";
import supertest from "supertest";
import path from "path";
import app from "..";

const request = supertest(app);

const filename = "santamonica";
const width = 450;
const height = 300;
const outputPath = path.join(
  __dirname,
  "../../assets/thumb",
  `${filename}-${width}x${height}.jpg`
);

describe("Test endpoints responses", () => {
  it("should fail when no filename exists", async () => {
    const res = await request.get("/api/images");
    expect(res.text).toContain("Filename is missing!");
  });

  it("should fail when filename isn't within the specified filenames", async () => {
    const res = await request.get(`/api/images?filename=${filename}any`);
    expect(res.text).toContain("No such image!");
  });

  it("should fail when width/height aren't (provided or numbers)", async () => {
    const res = await request.get(
      `/api/images?filename=${filename}&height=${height.toString()}`
    );
    expect(res.text).toContain(
      "Width and height must be provided and of numerical values."
    );
  });

  it("should fail when width/height aren't positive integers", async () => {
    const res = await request.get(
      `/api/images?filename=${filename}&width=${-width}&height=${height}`
    );
    expect(res.text).toContain("Width and height must be positive integers.");
  });

  it("should successfully resize image when all params are clean", async () => {
    await request.get(
      `/api/images?filename=${filename}&width=${width}&height=${height}`
    );
    expect(existsSync(outputPath)).toBeTrue();
  });
});

// Clean after
afterAll(async () => {
  try {
    await access(outputPath, constants.F_OK);
    unlink(outputPath);
  } catch {
    console.error("cannot access");
  }
});
