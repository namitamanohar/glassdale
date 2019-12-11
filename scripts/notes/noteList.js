import { useNotes, getNotes, deleteNote } from "./noteDataProvider.js";
import notesComponent from "./note.js";

const contentElement =document.querySelector(".oldNotes")
const eventHub=document.querySelector(".container")

const noteList = () => {
  

  eventHub.addEventListener("showNoteButtonClicked", event=>{
      getNotes().then(
        ()=>{
          const notes=useNotes()
          render(notes)
        }
      )
  })
  


  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

       deleteNote(id).then(() => render(useNotes()) )
    }
})
const render = (noteCollection) =>{
  contentElement.innerHTML = `
  <article class="pastNotesContainer">
  ${
    noteCollection.map(note=>notesComponent(note)).join("")
  } 
  </article>
  `

}
} 
export default noteList