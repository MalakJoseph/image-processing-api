import express, { Request, Response } from "express";
import routes from "./routes/index";
import { generateHTML } from "./utils";

const app = express();
const port = 3000;

app.use("/api", routes);

app.get("/", (_req: Request, res: Response) =>
  res.send(
    generateHTML({
      title: "Please go to",
      helper:
        "&nbsp;<a href='http://localhost:3000/api/'>http://localhost:3000/api/</a>",
      inline: true,
    })
  )
);

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
