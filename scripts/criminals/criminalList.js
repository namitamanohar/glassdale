import { useCriminals } from "./criminalsDataProvider.js";
import criminalComponent from "./criminal.js";

const eventHub = document.querySelector(".container")

const criminalListComponent = () =>{
console.log("this is the criminal list component")

  const contentElement = document.querySelector(".criminalsContainer")
  
  const appStateCriminals =useCriminals()

  eventHub.addEventListener("crimeSelected", event=>{
      const crimeName=event.detail.crime
      // event.detail.crime is a string 
     const filteredCriminals= appStateCriminals.filter(
        (individualCriminal)=>{
          if(individualCriminal.conviction===crimeName){
            return individualCriminal
          }
        }
      )
      render(filteredCriminals)


  })

  const render = (crimeCollection) =>{
    contentElement.innerHTML = `
      ${
        crimeCollection.map(
          (criminal)=> {
            return criminalComponent(criminal)
          }
        ).join("")
      }
    
    `
  }

  // render(appStateCriminals)
}

export default criminalListComponent 