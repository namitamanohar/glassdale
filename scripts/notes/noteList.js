import { useNotes, getNotes } from "./noteDataProvider.js";
import notesComponent from "./note.js";

const contentElement =document.querySelector(".oldNotes")
const eventHub=document.querySelector(".container")

const noteList = () => {
  

  eventHub.addEventListener("showNoteButtonClicked",event=>{
      getNotes().then(
        ()=>{
          const notes=useNotes()
          render(notes)
        }
      )
  })
  
const render = (noteCollection) =>{
  contentElement.innerHTML = `
  <article class="pastNotesContainer">
  ${
    noteCollection.map(
      (note)=> {
        return notesComponent(note)
      }
    ).join("")
  } 
  </article>
  `

}
} 
export default noteList