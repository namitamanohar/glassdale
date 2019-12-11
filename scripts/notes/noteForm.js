import { saveNote, getNotes } from "./noteDataProvider.js"
import noteList from "./noteList.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub=document.querySelector(".container")

const NoteFormComponent = () => {

   // Handle internal element click
   eventHub.addEventListener("click", clickEvent => {
     
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "noteText":document.querySelector("#note-text").value,
            "dateOfNote":document.querySelector("#date-of-note").value,
            "suspectName":document.querySelector("#suspect-name").value
               
        }

        // Change API state and application state
        saveNote(newNote).then(()=>noteList())
    }
})
eventHub.addEventListener("click", clickEvent =>{
  if(clickEvent.target.id==="showNotes"){
      const message= new CustomEvent("showNoteButtonClicked")
      
      eventHub.dispatchEvent(message)

  }
})



    const render = () => {
        contentTarget.innerHTML = `
          <label for="date-of-note">Date</label>
          <input type="date" id="date-of-note" placeholder="Date of Note">
          <label for="note-text">Note Text</label>
          <input type="text" id="note-text" placeholder="Note Text">
          <label for="suspect-name">Suspect Name</label>
          <input type="text" id="suspect-name" placeholder="Suspect Name">
          <button id="saveNote">Save Note</button>
          <button id="showNotes">Show All Notes</button>
          <button id="showWitnesses">Show All Witnesses</button>
        `
    }

    render()
}

export default NoteFormComponent