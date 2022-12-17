import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

app.use("/api", routes);

app.get("/", (req, res) =>
  res.send(
    "Please go to <a href='http://localhost:3000/api/'>http://localhost:3000/api/</a>"
  )
);

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
