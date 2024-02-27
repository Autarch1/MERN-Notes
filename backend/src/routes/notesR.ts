import express from "express";
import * as NoteController from "../controller/notes";

const router = express.Router();

router.get("/", NoteController.getNotes);

router.post("/addNote", NoteController.createNote);
router.get("/:noteId", NoteController.searchNote);

export default router;
