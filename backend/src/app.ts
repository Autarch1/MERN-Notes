import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoute from "./routes/notesR";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/notes", notesRoute);

app.use((req, res, next) => {
  if (res.status(404)) {
    console.log("EndPoint not found ");
    next({ message: "This route doesnt exist " });
  }
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "Error fetching notes";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  res.status(500).json({ message: errorMessage });
});

export default app;
