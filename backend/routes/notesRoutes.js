import express from "express";
import {
  getAllNotes,
  updateNotes,
  deleteNotes,
  createNotes,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);
export default router;
