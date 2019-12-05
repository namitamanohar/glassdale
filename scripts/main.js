import { getCriminals } from "./criminals/criminalsDataProvider.js";
import criminalListComponent from "./criminals/criminalList.js";
import { getConvictions } from "./convictions/convictionsDataProvider.js";
import ConvictionSelect from "./convictions/convictionSelect.js";

getCriminals().then(
  ()=>criminalListComponent()
  )
  
getConvictions().then(
  ()=>ConvictionSelect()
  )

  // criminalListComponent is also called a callback function

 