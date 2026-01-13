export function getAllNotes(req, res) {
  res.status(200).send("You got 110 notes");
}

export function createNotes(req, res) {
  res.status(201).send({ message: "You created a new note" });
}

export function updateNotes(req, res) {
  res.status(200).send({ message: "You updated a note" });
}

export function deleteNotes(req, res) {
  res.status(200).send({ message: "You deleted a note" });
}
