import express, { Request, Response } from "express";
import cors from "cors"
import route from "./route/user-route";

const app = express();

app.use(cors<Request>())
const PORT = process.env.PORT || 4000;
console.log(PORT, "Port is showing");

app.use("/",route)

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}/login`);
});
