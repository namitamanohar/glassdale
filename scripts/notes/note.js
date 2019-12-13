const notesComponent = (note) =>{
  return `
  <section class="noteCard">
    <h6 class="noteCard__date">${new Date(note.dateOfNote).toLocaleDateString('en-US')}</h6>
    <div class="noteCard__suspect">${note.suspectName}</div>
    <br>
    <div class="noteCard__text">${note.noteText}</div>
    <br>
    <button id="deleteNote--${note.id}">Delete</button>
    <button id="editNote--${note.id}">Edit</button>
  </section>
  `
}

export default notesComponent

