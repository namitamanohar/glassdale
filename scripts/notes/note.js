const notesComponent = (note) =>{
  return `
  <section class="noteCard">
    <h3 class="noteCard__date">${new Date(note.dateOfNote).toLocaleDateString('en-US')}</h2>
    <div class="noteCard__suspect">${note.suspectName}</div>
    <div class="noteCard__text">${note.noteText}</div>
  </section>
  `
}

export default notesComponent

