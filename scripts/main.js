import { getCriminals } from "./criminals/criminalsDataProvider.js";
import criminalListComponent from "./criminals/criminalList.js";
import { getConvictions } from "./convictions/convictionsDataProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";
import NoteFormComponent from "./notes/noteForm.js";
import { getNotes } from "./notes/noteDataProvider.js";
import noteList from "./notes/noteList.js";
import initializeAssociatesButtonEvents from "./criminals/criminalDialogs.js";

NoteFormComponent()

getCriminals().then(
  ()=>criminalListComponent()
  ).then(
    () =>initializeAssociatesButtonEvents()
  )
  
getConvictions().then(
  ()=>ConvictionSelect()
  )

getNotes().then(
  () => noteList()
)
  // criminalListComponent is also called a callback function

 