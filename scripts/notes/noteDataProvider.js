let notes =[]


export const saveNote = note => {
 return fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

// write a function for get Notes

export const deleteNote = noteId => {
    return fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

export const useNotes = () => {
    return notes 
}
export const getNotes = () => {
  return fetch("http://localhost:3000/notes")
      .then(response => response.json())
      .then(
          parsedNotes => {
              notes = parsedNotes.slice()
             
          }
      )
}