let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    console.log("I am going to fetch the criminals data")
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(



            parsedCriminals => {
                console.log("I am 100% sure I have the criminals data")
                criminals = parsedCriminals.slice()


                
            }
        )
}
