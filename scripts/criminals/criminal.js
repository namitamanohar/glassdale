const criminalComponent = (criminal) => {
  return `
  <section class="criminalCard">
    <h2 class='criminalCard__name'>${criminal.name}</h2>
    <div class="criminalCard__age">Age: ${criminal.age}</div>
    <div class="criminalCard__crime">Conviction: ${criminal.conviction}</div>
    <div class="criminalCard__termStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminalCard__termEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
  </section>
  `
}

export default criminalComponent