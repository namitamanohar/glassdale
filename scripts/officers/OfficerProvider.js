let officers = []

export const useOfficers = () => {
    return officers
}

export const getOfficers = () => {
    console.log("about to get officers data ")
    return fetch("http://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers= parsedOfficers.slice() 
            }
        )
}


