// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Patrick purchased Pro Membership on June 1", 
    "Muhamad purchased Pro Membership on August 2", 
    "Taif purchased Pro Membership on June 3", 
    "Richard purchased Pro Membership on July 31", 
    "Fanny purchased SwiftUI Architecture on July 30", 
    "David purchased Supabase for iOS Developers on July 31", 
    "Stewart purchased Supabase for iOS Developers on August 2"
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}