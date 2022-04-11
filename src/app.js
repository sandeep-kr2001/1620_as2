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