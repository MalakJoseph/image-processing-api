import express from "express";
import { images } from "./routes/images";

const app = express();
const port = 3000;

app.use("/images", images);
app.get("/", (req, res) => res.send("success!"));

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
