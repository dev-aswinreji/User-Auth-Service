import express, { Request, Response } from "express";
import cors from "cors"
import route from "./route/user-route";

const app = express();

app.use(cors<Request>())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 4000;

app.use("/",route)

app.listen(PORT,() => {
  console.log(`Server is listening http://localhost:${PORT}/login`);
});
