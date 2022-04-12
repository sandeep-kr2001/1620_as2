const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
const plusButton = document.querySelector('.fa-circle-plus')
const noteCreate = `<textarea class='note-textarea' rows="25" cols="90" placeholder="Write your notes here, first line will be the title"></textarea><div class ="buttons-fornote"><button class='save-button'>Save</button><button class='cancel-button'>Cancel</button></div>`
const writeNote = document.querySelector(".write-note-area")
const noteDisplayArea = document.querySelector(".notes-list")
const createNote = document.querySelector('.create-note-area')

//Add text area
function addNewText() {
  writeNote.insertAdjacentHTML("afterbegin", noteCreate);
  const cancelNoteBtn = document.querySelector(".cancel-button"); //selects the cancel button
  const saveTextBtn = document.querySelector(".save-button"); //selects the save button
  saveTextBtn.addEventListener("click", savePad);
  cancelNoteBtn.addEventListener("click", cancelNote); //listen the cancel 
  plusButton.removeEventListener("click", addNewText);
  plusButton.remove() //removes the plusButton
}
plusButton.addEventListener("click", addNewText);

//Cancel text area
function cancelNote() {
  while (writeNote.hasChildNodes()) {
    writeNote.removeChild(writeNote.firstChild);
  }
  createNote.appendChild(plusButton)
  plusButton.addEventListener("click", addNewText);
}
//Save text area 
function newNotepad() {
  const notePad = document.querySelector(".note-textarea");
  const titles = notePad.value.split("\n")[0]; //split the text so first line becomes title 
  notes.push({ title: titles, noteBody: notePad.value, id: notes.length +1 }); //add 1 to next id and save the values 
  const listNote = `  <li>${titles}</li>`; //create a new list in ul
  noteDisplayArea.insertAdjacentHTML("beforeend", listNote);
}
function savePad() {
  newNotepad();
  cancelNote();
}
