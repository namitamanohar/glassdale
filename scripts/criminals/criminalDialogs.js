
const initializeAssociatesButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const CloseButtons = document.querySelectorAll(".button--close")

  for (const btn of CloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }


const allDetailButtons = document.querySelectorAll("button[id^='associates--']")
console.log(allDetailButtons)
for (const btn of allDetailButtons) {
    btn.addEventListener(
        "click",
        theEvent => {
            const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        }
    )
}
  
}
export default initializeAssociatesButtonEvents
