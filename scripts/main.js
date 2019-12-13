import { getCriminals } from "./criminals/criminalsDataProvider.js";
import criminalListComponent from "./criminals/criminalList.js";
import { getConvictions } from "./convictions/convictionsDataProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";
import NoteFormComponent from "./notes/noteForm.js";
import { getNotes } from "./notes/noteDataProvider.js";
import noteList from "./notes/noteList.js";
import initializeAssociatesButtonEvents from "./criminals/criminalDialogs.js";
import { getWitnesses } from "./witnesses/witnessDataProvider.js";
import witnessListComponent from "./witnesses/witnessList.js";
import { getOfficers } from "./officers/OfficerProvider.js";
import OfficerSelect from "./officers/officersSelect.js";

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

getWitnesses().then(
  ()=>witnessListComponent()
)
// criminalListComponent is also called a callback function

getOfficers().then(
  () => OfficerSelect()
)

