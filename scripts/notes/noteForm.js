import { saveNote, getNotes, useNotes } from "./noteDataProvider.js"
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
        saveNote(newNote).then(()=>document.getElementById("noteForm").reset()).then(
            () => {
                const message= new CustomEvent("noteCreated")
                eventHub.dispatchEvent(message)
            }
        )
    }
})
// eventHub.addEventListener("click", clickEvent =>{
//   if(clickEvent.target.id==="showNotes"){
//       const message= new CustomEvent("showNoteButtonClicked")
      
//       eventHub.dispatchEvent(message)

//   }
// })



    const render = () => {
        contentTarget.innerHTML = `
          <hr class="buttonBorderLine">
          <section class="noteFormGroup">
          <form id="noteForm">
          <label for="date-of-note">Date</label>
          <input type="date" id="date-of-note" placeholder="Date of Note">
          <label for="note-text">Note Text</label>
          <input type="text" id="note-text" placeholder="Note Text">
          <label for="suspect-name">Suspect Name</label>
          <input type="text" id="suspect-name" placeholder="Suspect Name">
          </form>
          <button id="saveNote">Save Note</button>
          </form>
          </section>
          <section class="buttonGroup">
          <button id="hideNote">Hide Notes</button>
          <button id="showNotes">Show All Notes</button>
          <button id="showWitnesses">Show All Witnesses</button>
          </section>
          <hr class="buttonBorderLine">
        `
    }

    render()
}

export default NoteFormComponent