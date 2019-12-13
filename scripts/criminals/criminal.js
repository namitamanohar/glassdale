const criminalComponent = (criminal) => {
  return `
  <section class="criminalCard">
    <h2 class='criminalCard__name'>${criminal.name}</h2>
    <div class="criminalColor">
    <div class="criminalCard__age">Age: ${criminal.age}</div>
    <div class="criminalCard__crime">Conviction: ${criminal.conviction}</div>
    <div class="criminalCard__termStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminalCard__termEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </div>
    <div class="associatesDialog">
    <button id="associates--${criminal.id}">Known Associates</button>
    <dialog class='dialog--known_associates' id='details--${criminal.name.split(" ").join("-")}'>
      <h3>Known Associates</h3>
      <div class="dialog__name">${criminal.known_associates.map((ass) =>{return ass.name}).join(", ")}</div>
      <h3>Alibi</h3>
      <div class="dialog__alibi">${criminal.known_associates.map((ass)=>{return ass.alibi}).join(", ")}</div>
      <br>
      <button class='button--close' id='close-${criminal.known_associates}'>Close Info</button>
    </dialog>
  </div>
  </section>
  `
}

export default criminalComponent