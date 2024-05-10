// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Markus purchased SwiftData Bootcamp on April 8",
    "Rudy purchased Pro Membership on April 8", 
    "Julian purchased SwiftUI Architecture on May 8", 
    "Nawaf purchased Pro Membership on May 8", 
    "Slawomira purchased Pro Membership on May 9", 
    "Jeffery purchased Pro Membership on May 9", 
    "Shilan purchased SwiftUI Architecture on May 9", 
    "Brian purchased SwiftUI Architecture on May 9", 
    "William purchased SwiftUI Architecture on May 9", 
    "Stuart purchased SwiftUI Architecture on May 9", 
    "Florin purchased Pro Membership on May 9", 
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}