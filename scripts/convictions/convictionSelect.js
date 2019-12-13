/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionsDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub=document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
  
    // Get all convictions from application state
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent=>{
      if(changeEvent.target.id==="crimeSelect"){
        const selectedCrime=changeEvent.target.value
// make custom event to talk to other components 
        const crimeNameMessage=new CustomEvent("crimeSelected",{
          detail: {
            crime: selectedCrime
          }
        })
        eventHub.dispatchEvent(crimeNameMessage)
    }
  })



    const render = convictionsCollection => {
      
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                <option value="showAll" class="showAllCriminals">Show All Criminals</option>
                ${
                  convictions.map(conviction =>
                      `<option class="crime" value="${conviction}">${conviction}</option>`
                  )
              }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect

