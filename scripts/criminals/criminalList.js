import { useCriminals } from "./criminalsDataProvider.js";
import criminalComponent from "./criminal.js";

const criminalListComponent = () =>{
console.log("this is the criminal list component")
  const contentElement = document.querySelector(".criminalsContainer")
  const criminals =useCriminals()

  contentElement.innerHTML += `
  
    ${
      criminals.map(
        (criminal)=> {
          return criminalComponent(criminal)
        }
      ).join("")
    }
  
  `
}

export default criminalListComponent 