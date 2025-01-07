import express, { Request, Response } from "express";
import cors from "cors"

const app = express();

app.use(cors<Request>())
const PORT = process.env.PORT || 4000;
console.log(PORT, "Port is showing");

app.get("/login", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login auth success" });
});

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}/login`);
});
