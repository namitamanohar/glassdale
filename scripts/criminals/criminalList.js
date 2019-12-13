import { useCriminals, getCriminals } from "./criminalsDataProvider.js";
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

  

  eventHub.addEventListener("officerSelected", event =>{
    const officerName=event.detail.officer
    const filteredOfficers=appStateCriminals.filter(
      (individualCriminal) => {
        if(individualCriminal.arrestingOfficer===officerName){
        return individualCriminal
      }
    }
    )
      render(filteredOfficers)
  })


  eventHub.addEventListener("click", event =>{
    if(event.target.id.startsWith("button--")){
      const dialogSiblingSelector = `#${event.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
    }
    if(event.target.classList.contains("button--close")){
      const dialogElement = event.target.parentNode
              dialogElement.close()
    }
  })

  eventHub.addEventListener("change", changeEvent =>{
      if(changeEvent.target.value==="showAll"){
        getCriminals().then(
          () => {
            const criminals=useCriminals()
            render(criminals)
          }
          )

      }
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

  render(appStateCriminals)
}

export default criminalListComponent 