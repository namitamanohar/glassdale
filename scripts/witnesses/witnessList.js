import { useWitnesses, getWitnesses } from "./witnessDataProvider.js";
import witnessComponent from "./witness.js";

const contentElement=document.querySelector(".criminalsContainer")
const eventHub=document.querySelector(".container")

const witnessListComponent = () => {
  
  
  
  eventHub.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id==="showWitnesses"){
      getWitnesses().then(
        () => {
          const witnesses=useWitnesses()
          render(witnesses)
        }
        )

    }
  })
  
  const render = (witnessCollection) =>{
    contentElement.innerHTML =`
      ${
        witnessCollection.map(
          (witness)=>{
            return witnessComponent(witness)
          }
        ).join("")
      }
    
    `
  }
}

export default witnessListComponent