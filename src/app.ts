import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/students/student.route";

const app: Application = express();
const port = 5000;

app.use(express.json());

app.use(cors());

app.use("/api/v1/students", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
