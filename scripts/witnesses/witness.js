const witnessComponent = (witness) =>{
  return `
  <section class="witnessCard">
    <h4 class="witnessCard__name">${witness.name}</h4>
    <div class="witnessCard__statement">${witness.statements}</div>
  </section>
  `
}

export default witnessComponent