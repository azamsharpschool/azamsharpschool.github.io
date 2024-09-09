// This is the history of actual sales from AzamSharp School. 
// This is not live data and the sales happened in the past. 
const recentSales = [
    "Ociel purchased Supase for iOS Developers on August 29", 
    "Shakir purchased Pro Membership on September 3", 
    "Lucas purchased Pro Membership on September 3", 
    "Peter purchased Pro Membership on September 6",
    "Jean purchased Pro Membership September 9", 
    "Ned purchased Supabase for iOS Developers Workshop on September 4"
]

function getRecentSales() {
    const randomNumber = Math.floor(Math.random() * (recentSales.length - 0)) + 0;
    console.log(randomNumber)
    return recentSales[randomNumber]
}