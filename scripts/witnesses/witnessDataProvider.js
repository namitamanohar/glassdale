let witnesses=[]

export const useWitnesses = () =>{
  return witnesses 
}

export const getWitnesses = () => {
console.log("about to gt witness data")
  return fetch("http://criminals.glassdale.us/witnesses")
      .then(response => response.json())
      .then(
          parsed => {
              witnesses = parsed.slice()
              console.table(witnesses)  
          }
      )
}
