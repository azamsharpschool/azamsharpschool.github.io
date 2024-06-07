// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Patrick purchased Pro Membership on June 1", 
    "Muhamad purchased Pro Membership on June 2", 
    "Taif purchased Pro Membership on June 3", 
    "Rudy purchased Pro Membership on June 4", 
    "Brian purchased Pro Membership on June 6", 
    "Jevgeni purchased SwiftUI Architecture on June 6", 
    "Peter purchased Pro Membership on June 7"
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}