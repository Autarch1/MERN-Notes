import "dotenv/config";
import express from "express";
import NoteModel from "./model/node";

const app = express();

app.get("/", async (req, res) => {
  const notes = await NoteModel.find().exec();
  res.json(notes);
});

app.post("/addNote", async (req, res) => {
  const note = new NoteModel({
    title: "About me tho",
    text: "Your life real  ?",
  });
  await note.save();
  res.json(note);
});

export default app;
