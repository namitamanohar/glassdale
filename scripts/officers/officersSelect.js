import { useOfficers } from "./OfficerProvider.js";

const eventHub=document.querySelector(".container")
const contentElement=document.querySelector(".filters__officer")

const OfficerSelect = () => {

  const officers= useOfficers()

  eventHub.addEventListener("change", changeEvent =>{
    if (changeEvent.target.id==="officerSelect"){
      const selectedOfficer=changeEvent.target.value
      const message = new CustomEvent("officerSelected", {
        detail:{
          officer: selectedOfficer
        }
      })
      eventHub.dispatchEvent(message)
    }
  })

  const render = officers => {
    contentElement.innerHTML = `
      <select class="dropdown" id="officerSelect">
        <option value="0">Please select an arresting officer</option>
        ${
          officers.map(officer =>
            `<option class="officer" value="${officer}">${officer}</option>`
          )
        }
        </select>
    `
  }
  render(officers)

}

export default OfficerSelect 