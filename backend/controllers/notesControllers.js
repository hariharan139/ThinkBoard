import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getting all notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in finding the notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;

    const note = new Note({ title, content });
    const savednote = await note.save();
    res.status(201).json(savednote);
  } catch (error) {
    console.error("Error in creating a notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "note updated " });
  } catch (error) {
    console.error("Error in updating a notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in updating a notes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
